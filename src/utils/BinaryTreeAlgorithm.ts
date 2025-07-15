import { TreeNode, TreeConfig, TreeState } from '../types/BinaryTree';

export class BinaryTreeAlgorithm {
  private config: TreeConfig;
  private state: TreeState;
  private nodeCounter: number = 0;

  constructor(config: TreeConfig) {
    this.config = config;
    this.state = {
      root: null,
      nodes: new Map<string, TreeNode>(),
      maxLevel: 0,
      isExpanding: false,
      expansionQueue: []
    };
  }

  createNode(value: number, x: number, y: number, level: number, parent: TreeNode | null = null): TreeNode {
    const id = `node_${this.nodeCounter++}`;
    const node: TreeNode = {
      id,
      value,
      x,
      y,
      left: null,
      right: null,
      parent,
      level,
      isExpanding: false,
      isNew: true
    };
    
    this.state.nodes.set(id, node);
    return node;
  }

  insert(value: number): void {
    if (!this.state.root) {
      const centerX = 200; // Will be calculated based on screen width
      const startY = 50;
      this.state.root = this.createNode(value, centerX, startY, 0);
      this.state.maxLevel = 0;
      this.addToExpansionQueue(this.state.root);
    } else {
      this.insertNode(this.state.root, value);
    }
  }

  private insertNode(node: TreeNode, value: number): void {
    if (value < node.value) {
      if (node.left === null) {
        const newLevel = node.level + 1;
        const newX = node.x - this.config.nodeSpacing * Math.pow(2, this.state.maxLevel - newLevel);
        const newY = node.y + this.config.levelHeight;
        
        const newNode = this.createNode(value, newX, newY, newLevel, node);
        node.left = newNode;
        this.state.maxLevel = Math.max(this.state.maxLevel, newLevel);
        this.addToExpansionQueue(newNode);
        this.rebalanceTree();
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        const newLevel = node.level + 1;
        const newX = node.x + this.config.nodeSpacing * Math.pow(2, this.state.maxLevel - newLevel);
        const newY = node.y + this.config.levelHeight;
        
        const newNode = this.createNode(value, newX, newY, newLevel, node);
        node.right = newNode;
        this.state.maxLevel = Math.max(this.state.maxLevel, newLevel);
        this.addToExpansionQueue(newNode);
        this.rebalanceTree();
      } else {
        this.insertNode(node.right, value);
      }
    }
  }

  private addToExpansionQueue(node: TreeNode): void {
    this.state.expansionQueue.push(node);
    if (!this.state.isExpanding) {
      this.startExpansion();
    }
  }

  private startExpansion(): void {
    this.state.isExpanding = true;
    this.processExpansionQueue();
  }

  private processExpansionQueue(): void {
    if (this.state.expansionQueue.length === 0) {
      this.state.isExpanding = false;
      return;
    }

    const node = this.state.expansionQueue.shift()!;
    node.isExpanding = true;
    node.isNew = false;

    // Schedule next expansion
    setTimeout(() => {
      this.processExpansionQueue();
    }, this.config.expansionDelay);
  }

  private rebalanceTree(): void {
    // Simple rebalancing - recalculate positions
    this.recalculatePositions(this.state.root!, 0, 0);
  }

  private recalculatePositions(node: TreeNode, level: number, position: number): number {
    if (!node) return position;

    // Calculate new position based on level and position
    const totalNodesAtLevel = Math.pow(2, level);
    const spacing = this.config.nodeSpacing * Math.pow(2, this.state.maxLevel - level);
    const startX = 200 - (totalNodesAtLevel - 1) * spacing / 2;
    
    node.x = startX + position * spacing;
    node.y = 50 + level * this.config.levelHeight;
    node.level = level;

    let nextPosition = position + 1;
    if (node.left) {
      nextPosition = this.recalculatePositions(node.left, level + 1, position * 2);
    }
    if (node.right) {
      nextPosition = this.recalculatePositions(node.right, level + 1, position * 2 + 1);
    }

    return nextPosition;
  }

  getState(): TreeState {
    return { ...this.state };
  }

  getNodes(): TreeNode[] {
    return Array.from(this.state.nodes.values());
  }

  getRoot(): TreeNode | null {
    return this.state.root;
  }

  isExpanding(): boolean {
    return this.state.isExpanding;
  }

  // Generate random values for demo
  generateRandomTree(count: number): void {
    for (let i = 0; i < count; i++) {
      const value = Math.floor(Math.random() * 100) + 1;
      this.insert(value);
    }
  }

  // Clear the tree
  clear(): void {
    this.state = {
      root: null,
      nodes: new Map<string, TreeNode>(),
      maxLevel: 0,
      isExpanding: false,
      expansionQueue: []
    };
    this.nodeCounter = 0;
  }
} 