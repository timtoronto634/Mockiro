import React from 'react';
import { EditableBox } from './EditableBox';
import { AddBoxButton } from './AddBoxButton';
import '../css/MindMapNode.css'

export const MindMapNode = (onAddButton: ()=>void) => {
  const addButton = AddBoxButton(onAddButton);
  return (
    <div className="mind-map-node">
      <EditableBox />
      addButton
    </div>
  );
}