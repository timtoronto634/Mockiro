import React from 'react';
import { EditableBox } from './EditableBox';
import { AddBoxButton } from './AddBoxButton';
import '../css/MindMapNode.css'

interface MindMapNodeProps {
  onAddButton: () => void;
}

export const MindMapNode: ((a: MindMapNodeProps) => JSX.Element) = (props) => {
  const addButton = AddBoxButton(props.onAddButton);
  return (
    <div className="mind-map-node">
      <EditableBox />
      {addButton}
    </div>
  );
};
