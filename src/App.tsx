import React from 'react';
import { MindmapNode } from './central/components/MindmapNode';

export const App = () => {
  return (
    <div className="App">
      <h1>Mind Map</h1>
      <MindmapNode level={0} />
    </div>
  );
};
