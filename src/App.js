
import React, { useState } from 'react';
import './App.css';

function App() {
  const [hunger, setHunger] = useState(0);
  const [chatCommand, setChatCommand] = useState('');

  const feedPet = () => setHunger(hunger + 1);
  const goonPet = () => alert('Pumpye is excited!');

  const handleCommand = e => {
    e.preventDefault();
    const cmd = chatCommand.trim().toLowerCase();
    if (cmd === '!feed') feedPet();
    if (cmd === '!goon') goonPet();
    setChatCommand('');
  };

  return (
    <div className="app">
      <h1>Pumpye</h1>
      <img
        src="/sprites/pet.png"
        alt="Pumpye Pet"
        style={{ imageRendering: 'pixelated', width: 128, height: 128 }}
      />
      <p>Hunger: {hunger}</p>
      <div className="buttons">
        <button onClick={feedPet}>!feed</button>
        <button onClick={goonPet}>!goon</button>
      </div>
      <form onSubmit={handleCommand} className="chat">
        <input
          placeholder="Type !feed or !goon"
          value={chatCommand}
          onChange={e => setChatCommand(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
