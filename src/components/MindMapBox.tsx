import React from 'react';
import { EditableBox } from './EditableBox';

export const MindMapBox = (onAddButton: ()=>void) => {
  return (
    <div className="App">
      <EditableBox />
      {/* <AddBoxButton /> */}
      {/* <button className="add-box-button" onClick={onAddButton}>+</button> */}
    </div>
  );
}