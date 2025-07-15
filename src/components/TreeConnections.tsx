import React from 'react';
import { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { TreeNode } from '../types/BinaryTree';

interface TreeConnectionsProps {
  nodes: TreeNode[];
}

export const TreeConnections: React.FC<TreeConnectionsProps> = ({ nodes }) => {
  const connections: Array<{ from: TreeNode; to: TreeNode }> = [];

  // Build connections array
  nodes.forEach(node => {
    if (node.left) {
      connections.push({ from: node, to: node.left });
    }
    if (node.right) {
      connections.push({ from: node, to: node.right });
    }
  });

  return (
    <Svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {connections.map((connection, index) => (
        <Line
          key={`${connection.from.id}-${connection.to.id}`}
          x1={connection.from.x}
          y1={connection.from.y}
          x2={connection.to.x}
          y2={connection.to.y}
          stroke="#666"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      ))}
    </Svg>
  );
}; 