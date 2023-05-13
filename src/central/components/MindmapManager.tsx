import React from 'react';
import { MindmapNode } from './MindmapNode';

export const MindmapManager: React.FC = () => {
  // const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);

  // const handleNodeSelection = (id: number) => {
  //   setSelectedNodeId(id);
  // };

  return (
    <div className="App">
      <MindmapNode level={0} />
    </div>
  );
};
