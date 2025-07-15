export interface TreeNode {
  id: string;
  value: number;
  x: number;
  y: number;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;
  level: number;
  isExpanding: boolean;
  isNew: boolean;
}

export interface TreeConfig {
  nodeRadius: number;
  levelHeight: number;
  nodeSpacing: number;
  animationDuration: number;
  expansionDelay: number;
}

export interface TreeState {
  root: TreeNode | null;
  nodes: Map<string, TreeNode>;
  maxLevel: number;
  isExpanding: boolean;
  expansionQueue: TreeNode[];
} 