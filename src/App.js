import React, { useEffect, useState } from 'react';
import { fetchCats } from './services/CatService';
import CatGallery from './components/CatGallery';
import CatModal from './components/CatModal';
import './index.css';

function App() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  const loadCats = async () => {
    try {
      const data = await fetchCats();
      setCats(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  useEffect(() => {
    console.log("Stan selectedCat:", selectedCat);
  }, [selectedCat]); // Debugowanie zmiany stanu

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Galeria kotów 😺</h1>
      <button onClick={loadCats} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded">
        Refresh cats
      </button>
      <CatGallery cats={cats} onSelect={setSelectedCat} />
      {selectedCat && <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />}
    </div>
  );
}


export default App;
