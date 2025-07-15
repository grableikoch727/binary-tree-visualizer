# Binary Tree Visualizer

An interactive web application for visualizing binary tree algorithms in real-time. Built with vanilla JavaScript, HTML, and CSS, featuring smooth animations and touch-friendly controls.

## 🌟 Features

- **Interactive Tree Visualization**: Real-time binary tree construction with smooth animations
- **Drag & Zoom**: Move the tree around and zoom in/out for better exploration
- **Touch Support**: Fully responsive design with touch gestures for mobile devices
- **Multiple Input Methods**: Add random nodes, custom values, or generate complete trees
- **Visual Feedback**: Color-coded nodes showing different states (root, expanding, new, regular)
- **Real-time Statistics**: Live node count and status updates

## 🚀 Live Demo

Visit the live application: [Binary Tree Visualizer](https://grableikoch727.github.io/binary-tree-visualizer/)

## 🎮 How to Use

### Desktop Controls
- **Mouse Drag**: Click and drag to move the tree around
- **Mouse Wheel**: Scroll to zoom in/out
- **Buttons**: Use the control buttons to add nodes and manage the tree

### Mobile Controls
- **Touch Drag**: Swipe to move the tree around
- **Pinch Gestures**: Pinch to zoom in/out
- **Touch Buttons**: Tap buttons to interact with the tree

### Tree Operations
- **Add Random**: Adds a random value (1-100) to the tree
- **Add Custom**: Enter a specific value to add to the tree
- **Generate Tree**: Creates a complete random tree with 10 nodes
- **Clear**: Removes all nodes and resets the view

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **GitHub Pages**: Free hosting and deployment

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Touch-enabled devices

## 🚀 Deployment Options

### GitHub Pages (Recommended)
This repository is configured for automatic deployment to GitHub Pages. Simply push to the main branch and the site will be deployed automatically.

### Alternative Deployments
The project also includes configurations for:
- **Vercel**: `vercel.json` configuration included
- **Netlify**: `netlify.toml` configuration included

## 🏗️ Project Structure

```
BinaryTreeVisualizer/
├── web-version/           # Web application files
│   ├── index.html        # Main HTML file
│   ├── README.md         # Web version documentation
│   ├── vercel.json       # Vercel deployment config
│   └── netlify.toml      # Netlify deployment config
├── src/                  # React Native source code
├── assets/               # Project assets
├── .github/workflows/    # GitHub Actions workflows
└── README.md            # This file
```

## 🔧 Local Development

To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/grableikoch727/binary-tree-visualizer.git
   cd binary-tree-visualizer
   ```

2. **Serve the web version**:
   ```bash
   cd web-version
   python -m http.server 8000
   # or
   npx http-server -p 8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

**Made with ❤️ for the developer community** 