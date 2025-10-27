import React from 'react';
import Pokedex from './components/Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white py-3 mb-4">
        <div className="container">
          <h1 className="text-center">Pokédex</h1>
        </div>
      </header>
      <main>
        <Pokedex />
      </main>
    </div>
  );
}

export default App;