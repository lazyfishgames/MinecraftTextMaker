// src/App.tsx

import React from 'react';
import InputComponent from './components/InputComponent';
import './App.css';

const App: React.FC = () => {
  const handleSubmit = (text: string) => {
    // Convert text to Minecraft book logic here
    console.log('Text to Minecraft Book:', text);
  };

  return (
    <div className="App">
      <h1>Minecraft Text-to-Book</h1>
      <InputComponent onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
