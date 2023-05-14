import React, { useState } from 'react';

interface MindmapNodeProps {
  level: number;
  id: string;
  moveNode: (nodeId: string, newParentId: string) => void;
  addNode: (id: string, parentId: string | null) => void;
}

interface Node {
  level: number;
  id: string;
  text: string;
  moveNode: (nodeId: string, newParentId: string) => void;
}

export const MindmapNode: React.FC<MindmapNodeProps> = ({
  level,
  id,
  moveNode,
  addNode,
}) => {
  // const [leftNode, setLeftNode] = useState<Node | null>(null);
  const [rightNodes, setRightNodes] = useState<Node[]>([]);

  const addRightNode = () => {
    const newId = level * 10000 + generateRandomId();
    const newNode: Node = {
      id: newId,
      level: level + 1,
      text: '',
      moveNode: moveNode,
    };
    addNode(newId, id);
    setRightNodes([...rightNodes, newNode]);
  };

  const moveToRoot = () => {
    moveNode(id, 'root');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" />
        <button onClick={moveToRoot}>move to root</button>
        <button onClick={addRightNode}>+</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rightNodes.map((node) => (
          <div
            style={{ display: 'flex', flexDirection: 'row' }}
            key={node.id + 'wrap'}
          >
            <MindmapNode
              key={node.id}
              level={level + 1}
              id={node.id}
              // parentId={node.parentId}
              moveNode={node.moveNode}
              addNode={addNode}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function generateRandomId(length = 10): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
