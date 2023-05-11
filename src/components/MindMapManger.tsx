import React from 'react';
import { useState } from 'react';
import { TextBox } from './TextBox';
import { MindMapNode } from './MindMapNode';
// import { EditableBox } from './EditableBox';

export const MindMapManager = () => {
  const doNothing = () => {};
  const [ll, setLl] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const tmpButton = () => {
    const newll = [...ll, 10];
    console.log(ll);
    setLl(newll);
  };
  const tBox = TextBox('test');

  return (
    <div className="Nodes">
      Mindmap
      {
        ll.map((val, idx) => {
          return (
            <div key={idx+"ll"}>
              <MindMapNode onAddButton={doNothing} />
            </div>
          );
        })
      }
    </div>
  );
};
