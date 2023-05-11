import React from 'react';
import { EditableBox } from './EditableBox';
import { AddBoxButton } from './AddBoxButton';
import '../css/MindMapNode.css'

interface MindMapNodeProps {
  // onAddButton: () => void;
  level: number;
  addChild: (a: number) => () => void;
  // setCols;
}

export const MindMapNode: ((a: MindMapNodeProps) => JSX.Element) = ({level, addChild}) => {
  const handleClick = addChild(level);
  
  return (
    <div className="mind-map-node">
      <EditableBox />
      <AddBoxButton onAddButton={handleClick} />
    </div>
  );
};
