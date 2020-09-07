import React, { useState } from 'react';

const InputBox = (props) => {
  const [value, setValue] = useState(props.value);

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = ({ keyCode }) => {
    if (keyCode === 13 && value !== '') {
      props.onEnter(value);
      setValue('');
    }
  };

  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`input-box ${props.className}`}
    />
  );
};

export default InputBox;
