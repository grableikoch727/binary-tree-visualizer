# Quick Start Guide

## Option 1: Web Version (Easiest - No Installation Required)

1. **Open the web version directly:**
   - Navigate to `BinaryTreeVisualizer/web-version/`
   - Double-click `index.html`
   - It will open in your default browser

2. **Features available:**
   - Add random nodes
   - Add custom values
   - Generate random trees
   - Clear the tree
   - Real-time animations

## Option 2: Full React Native App (Advanced)

### Prerequisites
- Node.js installed
- npm or yarn

### Installation Steps

1. **Open PowerShell as Administrator** and run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

2. **Navigate to the project directory:**
   ```powershell
   cd "C:\Users\gabriel kniriem\Cursor Projects\BinaryTreeVisualizer"
   ```

3. **Install dependencies:**
   ```powershell
   npm install
   ```

4. **Start the development server:**
   ```powershell
   npm start
   ```

5. **Choose your platform:**
   - **For Android:** Install Expo Go app and scan the QR code
   - **For Web:** Press `w` when the Metro bundler starts

## Features

### Real-time Algorithm Visualization
- Watch the binary tree expand node by node
- Smooth animations for node insertion
- Color-coded nodes (root, expanding, new, regular)
- Connection lines between parent and child nodes

### Interactive Controls
- **Add Random:** Inserts a random value (1-100)
- **Add Custom:** Enter a specific value
- **Generate Tree:** Creates a tree with 10 random nodes
- **Clear:** Removes all nodes

### Visual Feedback
- **Blue nodes:** Root node
- **Green nodes:** Newly added nodes
- **Orange nodes:** Currently expanding
- **Purple nodes:** Regular nodes
- **Dashed lines:** Connections between nodes

## How the Algorithm Works

1. **Binary Search Tree Rules:**
   - Smaller values go to the left child
   - Larger values go to the right child

2. **Real-time Expansion:**
   - Each node expansion is animated
   - Tree automatically rebalances
   - Positions are recalculated for optimal layout

3. **Animation System:**
   - New nodes appear with spring animations
   - Expanding nodes scale up briefly
   - Smooth transitions between states

## Troubleshooting

### Web Version Issues
- Make sure JavaScript is enabled in your browser
- Try refreshing the page if animations seem stuck

### React Native Issues
- If npm install fails, try running the PowerShell script: `.\setup.ps1`
- For Android issues, ensure Expo Go is installed
- For web issues, check if port 19006 is available

## Performance Tips

- The web version works best with up to 50 nodes
- Use the "Clear" button to reset if performance degrades
- The app automatically optimizes layout for different screen sizes

## Next Steps

Once you're comfortable with the basic visualization, you can:
- Modify the animation speeds in the code
- Add new tree algorithms (AVL, Red-Black trees)
- Implement node deletion animations
- Add search and traversal visualizations

Enjoy exploring the binary tree algorithm in real-time! 🌳✨ 