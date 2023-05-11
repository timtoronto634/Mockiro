import React from 'react';

export const AddBoxButton = (onAddButton: () => void) => {
  return <button className="add-box-button" onClick={onAddButton}>+</button>
};
