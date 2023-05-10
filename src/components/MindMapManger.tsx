import React, { useState } from 'react';
// import { EditableBox } from './EditableBox';
import { MindMapBox } from './MindMapBox';

export const MindMapManager = () => {
  const addNode = () => {
    console.log('addNode');
  };
  const rootNode = MindMapBox(addNode);
  const [columns, setColumns] = useState<JSX.Element[]>([rootNode]);
  const tmpButton = () => {
    columns.push(MindMapBox(addNode));
    console.log(columns);
    setColumns(columns);
  };

  return (
    <div className="Nodes">
      {columns.map((column, index) => {
        return <div key={index}>{column}</div>;
      })}
      <button className="tmp-button" onClick={tmpButton}>
        +
      </button>
    </div>
  );
};
