import React from 'react';
import { useState, useEffect } from 'react';
import { TextBox } from './TextBox';
import { MindMapNode } from './MindMapNode';
// import { EditableBox } from './EditableBox';

export const MindMapManager = () => {
  const [cols, setCols] = useState<JSX.Element[][]>([[]]);
  const addChild: (a: number) => () => void = (currentIdx: number) => {
    return () => {
      const nextIdx = currentIdx + 1;
      const newCols = nextIdx >= cols.length ? [...cols, []] : [...cols];
      newCols[nextIdx].push(<MindMapNode level={nextIdx}  addChild={addChild} />);
      setCols(newCols);
    }
  };
  const rootNode = <MindMapNode level={0}  addChild={addChild} />;
  useEffect(() => {
    setCols([[rootNode]]);
  }, []);


  return (
    <div className="Nodes">
      Mindmap
      {
        cols.map((val, idx) => {
          return (
            <div key={idx+"ll"}>
              {val}
            </div>
          );
        })
      }
    </div>
  );
};
