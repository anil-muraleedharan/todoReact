import React from 'react';

const DeleteButton = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    x
  </button>
);

export default DeleteButton;
