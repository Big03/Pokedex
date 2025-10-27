import React, { useState } from 'react';

const Tile = ({ pokemon }) => {
  const [imageError, setImageError] = useState(false);

  const imagePath = `/pokedex_assets/${pokemon.id.toString().padStart(3, '0')}.png`;

  return (
    <div className="tile card h-100 shadow-sm">
      <div className="card-body text-center">
        <img 
          src={imageError ? '/pokedex_assets/000.png' : imagePath}
          alt={pokemon.name.english}
          className="card-img-top mb-2"
          style={{ width: '120px', height: '120px', objectFit: 'contain' }}
          onError={() => setImageError(true)}
        />
        <h5 className="card-title">{pokemon.name.english}</h5>
        <p className="card-text text-muted">#{pokemon.id.toString().padStart(3, '0')}</p>
        <div className="types">
          {pokemon.type.map((type, index) => (
            <span key={index} className="badge bg-secondary me-1">
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tile;