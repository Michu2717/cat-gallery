export async function fetchCats() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=6');
    if (!res.ok) throw new Error("Failed to fetch cat images");

    const data = await res.json();

    return data.slice(0, 6);
}
