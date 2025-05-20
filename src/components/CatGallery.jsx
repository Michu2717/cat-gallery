import React from 'react';
import './Gallery.css';

const CatGallery = ({ cats, onSelect }) => {
    return (
        <div className="gallery-grid">
            {cats.map((cat) => (
                <img
                    key={cat.id}
                    src={cat.url}
                    alt="cat"
                    className="gallery-image"
                    onClick={() => onSelect(cat)}
                />
            ))}
        </div>
    );
};

export default CatGallery;