import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  let numberofCards = Array.from({length: 12}, () => []);
  return (
    <div className="App">
      {numberofCards.map((item, idx) => <Card key={idx}/>)}
      
    </div>
  );
}

export default App;
