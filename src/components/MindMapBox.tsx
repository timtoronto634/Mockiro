import React, { useState } from 'react';
import '../css/MindMapBox.css';

export const MindMapBox = (): JSX.Element => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState('test');

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewText(event.target.value);
  };

  return (
    <div className="mind-map-box">
      {editing ? (
        <input
          type="text"
          value={newText}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div onDoubleClick={handleDoubleClick}>{newText ? newText : ''}</div>
      )}
    </div>
  );
};
