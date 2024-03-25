// src/components/InputComponent.tsx

import React, { useState } from 'react';

interface InputComponentProps {
  onSubmit: (text: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputText);
    setInputText('');
  };

  return (
    <div>
      <textarea value={inputText} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Convert to Book</button>
    </div>
  );
};

export default InputComponent;
