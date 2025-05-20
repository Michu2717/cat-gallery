import React from 'react';

export default function CatModal({ cat, onClose }) {
    if (!cat) return null;

    console.log("Wybrany kot:", cat); // Debugowanie danych

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                <img src={cat.url} alt="Cat" className="max-h-[80vh] max-w-[80vw]" />
                <button onClick={onClose} className="mt-4 block mx-auto bg-gray-800 text-white px-4 py-2 rounded">
                    Zamknij
                </button>
            </div>
        </div>
    );
}
