import React from 'react';
import { MindMapBox } from './components/MindMapBox';
import { MindMapManager } from './components/MindMapManger';

export const App = () => {
  return (
    <div className="App">
      <h1>Mind Map</h1>
      {/* <MindMapBox /> */}
      <MindMapManager />
    </div>
  );
};
