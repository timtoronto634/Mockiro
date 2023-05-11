import React, { useState } from 'react';
import '../css/EditableBox.css';

export const EditableBox = (text: string): JSX.Element => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);

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
    <div className="editable-box">
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
