import React from 'react';
import { useState } from 'react';
import { TextBox } from './TextBox';
// import { EditableBox } from './EditableBox';
// import { MindMapBox } from './MindMapBox';

export const MindMapManager = () => {
  // const [nodes, setNodes] = useState<JSX.Element[]>([]);
  const [ll, setLl] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const tmpButton = () => {
    const newll = [...ll, 10];
    console.log(ll);
    setLl(newll);
  };
  const tBox = TextBox('test');

  return (
    <div className="Nodes">
      {ll.map((val, idx) => {
        return <div key={idx.toString() + 'll'}>{val}</div>;
      })}
      {tBox}
      <button className="tmp-button" onClick={tmpButton}>
        +
      </button>
    </div>
  );
};
