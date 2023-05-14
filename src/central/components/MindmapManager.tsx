import React, { useCallback, useState } from 'react';
import { MindmapNode } from './MindmapNode';

interface Node {
  id: string;
  parentId: string | null;
}

export const MindmapManager: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([{ id: 'root', parentId: null }]);

  const moveNode = useCallback((nodeId: string, newParentId: string) => {
    setNodes((prevNodes) => {
      const nodeIndex = prevNodes.findIndex((node) => node.id === nodeId);
      if (nodeIndex === -1) {
        console.error(`Node with ID '${nodeId}' not found`);
        return prevNodes;
      }

      const updatedNode: Node = {
        ...prevNodes[nodeIndex],
        parentId: newParentId,
      };

      const updatedNodes = [...prevNodes];
      updatedNodes[nodeIndex] = updatedNode;
      console.log(updatedNodes);
      return updatedNodes;
    });
  }, []);

  const addNode = (id: string, parentId: string | null) => {
    setNodes((prevNodes) => {
      console.log(prevNodes);
      return [...prevNodes, { id: id, parentId: parentId }];
    });
  };

  const renderNodes = useCallback(
    (parentId: string | null) =>
      nodes
        .filter((node) => node.parentId === parentId)
        .map((node) => (
          <MindmapNode
            key={node.id}
            level={0}
            id={node.id}
            moveNode={moveNode}
            addNode={addNode}
          />
        )),
    [nodes, moveNode]
  );

  return <div className="Mindmap-Manager">{renderNodes(null)}</div>;
};
