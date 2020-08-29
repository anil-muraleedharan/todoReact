import React from 'react';

const InputBox = ({ value, onChange, onEnter }) => {
  const handleKeyDown = ({ keyCode }) => keyCode === 13 && onEnter();
  const handleChange = (event) => onChange(event.target.value);

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputBox;
