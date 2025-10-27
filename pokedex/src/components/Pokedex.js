import React, { useState, useEffect } from 'react';
import TypeButton from './TypeButton';
import Tile from './Tile';
import pokedexData from '../data/pokedex.json';
import typesData from '../data/types.json';

const Pokedex = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleTypeSelection = (type, isSelected) => {
    console.log(`Type: ${type}, Selected: ${isSelected}`);
    
    if (isSelected) {
      setSelectedType(type);
    } else {
      setSelectedType(null);
    }
  };

  const isTypeSelected = (type) => {
    return selectedType === type;
  };

  useEffect(() => {
    if (selectedType === null) {
      setFilteredPokemon(pokedexData);
    } else {
      const filtered = pokedexData.filter(pokemon => 
        pokemon.type.some(type => type === selectedType)
      );
      setFilteredPokemon(filtered);
    }
  }, [selectedType]);

  useEffect(() => {
    setFilteredPokemon(pokedexData);
  }, []);

  return (
    <div className="pokedex container mt-4">
      <div className="type-filters text-center mb-4">
        <h2 className="mb-3">Filter by Type</h2>
        <div className="type-buttons d-flex flex-wrap justify-content-center">
          {typesData.map((type, index) => (
            <TypeButton 
              key={index}
              type={type}
              isSelected={isTypeSelected(type.english)}
              action={handleTypeSelection}
            />
          ))}
        </div>
        <div className="mt-2 text-muted">
          Currently selected: <strong>{selectedType || "None"}</strong>
        </div>
      </div>

      <div className="pokemon-grid">
        <h3 className="text-center mb-3">Pokémon ({filteredPokemon.length})</h3>
        <div className="tiles-container row">
          {filteredPokemon.map(pokemon => (
            <div key={pokemon.id} className="col-6 col-md-4 col-lg-3 mb-3">
              <Tile pokemon={pokemon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;