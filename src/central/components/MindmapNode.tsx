import React, { useState } from 'react';

interface MindmapNodeProps {
  level: number;
}

interface Node {
  id: number;
  text: string;
}

export const MindmapNode: React.FC<MindmapNodeProps> = ({ level }) => {
  // const [leftNode, setLeftNode] = useState<Node | null>(null);
  const [rightNodes, setRightNodes] = useState<Node[]>([]);

  const addRightNode = () => {
    const newNode: Node = {
      id: rightNodes.length,
      text: '',
    };
    setRightNodes([...rightNodes, newNode]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" />
        <button onClick={addRightNode}>+</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rightNodes.map((node) => (
          <div style={{ display: 'flex', flexDirection: 'row' }} key={node.id}>
            <MindmapNode key={node.id} level={level + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};
