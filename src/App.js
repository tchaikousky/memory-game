import React from 'react';
import MemoryCard from './components/MemoryCard.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="header-title">Memory Game</h1>
        <h3 id="header-subtitle">
          Match cards to win.
        </h3>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
