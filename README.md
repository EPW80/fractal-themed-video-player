# CryptoFractal - Blockchain-Themed Video Player

A futuristic, blockchain-inspired video player showcasing fractal visualizations with dynamic color patterns. Built with vanilla HTML, CSS, and JavaScript featuring a cyberpunk aesthetic with neon green accents and terminal-style UI elements.

## 🎯 Features

### 🎨 **Visual Design**
- **Blockchain-inspired UI** with neon green (#00ff88) and cyan (#00d4ff) color scheme
- **Animated grid background** simulating digital matrix effects
- **Hexagonal geometric patterns** and floating elements
- **Terminal/monospace typography** (Courier New) for authentic tech feel
- **Gradient borders** with pulsing glow animations
- **Cyberpunk aesthetic** with dark gradients and neon accents

### 📹 **Video Player Features**
- **Custom video controls** with blockchain-themed styling
- **Progress bar** with scanning animation and rainbow gradient
- **Play/pause functionality** with animated button states
- **Time display** with monospace font and neon glow
- **Hover-activated controls** that auto-hide during playback
- **Loading spinner** with dual-ring blockchain animation
- **Keyboard shortcuts** for enhanced user experience

### 🔗 **Blockchain Elements**
- **CryptoFractal branding** with hexagon symbols
- **Block data visualization** instead of traditional transcript
- **Mining terminology** throughout the interface
- **Hash references** and distributed network concepts
- **Transaction-style metadata** display
- **Consensus and verification** themed descriptions

### ♿ **Accessibility & UX**
- **ARIA labels** and semantic HTML structure
- **Keyboard navigation** support (Space, K, arrows, F for fullscreen)
- **Responsive design** for mobile and desktop
- **Focus indicators** with neon styling
- **Screen reader** compatible elements
- **Progressive enhancement** approach

## 🗂️ Project Structure

```
video-page-project/
├── index.html              # Main HTML document
├── README.md               # Project documentation
├── captions.vtt           # Video captions (blockchain-themed)
├── css/
│   └── styles.css         # All styling (590+ lines)
├── js/
│   └── video-player.js    # Video player functionality
└── assets/
    ├── images/
    │   ├── fractal.mp4    # Main video file
    │   └── fractal.png    # Video poster/thumbnail
    └── videos/            # Alternative video storage
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with HTML5 video support
- Python 3.x (for local server)
- Your fractal video file and poster image

### Installation

1. **Clone or download** the project files
2. **Add your media files** to the assets/images directory:
   ```bash
   cp your-fractal-video.mp4 assets/images/fractal.mp4
   cp your-poster-image.png assets/images/fractal.png
   ```

3. **Start a local server**:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Open in browser**: Navigate to `http://localhost:8000`

### File Requirements

- **Video**: `assets/images/fractal.mp4` (any MP4 format)
- **Poster**: `assets/images/fractal.png` (recommended 1920x1080)
- **Captions**: `captions.vtt` (WebVTT format, included)

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` or `K` | Toggle play/pause |
| `←` | Seek backward 10s |
| `→` | Seek forward 10s |
| `↑` | Volume up |
| `↓` | Volume down |
| `F` | Toggle fullscreen |

## 🎨 Design System

### Color Palette
- **Primary Green**: `#00ff88` (neon green)
- **Secondary Cyan**: `#00d4ff` (bright cyan)
- **Accent Purple**: `#ff0080` (magenta)
- **Accent Violet**: `#8000ff` (electric purple)
- **Background**: Dark gradient (`#0a0e1a` → `#1a1a2e` → `#16213e`)

### Typography
- **Font Family**: `"Courier New", Monaco, monospace`
- **Headers**: Gradient text with neon glow effects
- **Body**: Terminal-style with blockchain terminology
- **Buttons**: Uppercase, letter-spaced for tech aesthetic

### Animations
- **Logo pulse**: 2s ease-in-out infinite
- **Border glow**: 3s color cycling
- **Progress scan**: 2s linear scanning effect
- **Data flow**: 3s gradient animation
- **Float elements**: 3s up/down movement

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `css/styles.css`:
```css
:root {
  --primary-green: #00ff88;
  --secondary-cyan: #00d4ff;
  --accent-purple: #ff0080;
  --accent-violet: #8000ff;
}
```

### Adding New Features
- **JavaScript**: Extend `js/video-player.js`
- **Styling**: Add to `css/styles.css`
- **Content**: Modify `index.html`

### Video Configuration
Update video sources in `index.html`:
```html
<video id="mainVideo" poster="assets/images/your-poster.png">
  <source src="assets/images/your-video.mp4" type="video/mp4" />
</video>
```

## 🌐 Browser Support

- **Chrome/Chromium**: Full support
- **Firefox**: Full support
- **Safari**: Full support (with vendor prefixes)
- **Edge**: Full support
- **Mobile browsers**: Responsive design included

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full experience)
- **Tablet**: 768px-1199px (adapted layout)
- **Mobile**: <768px (stacked layout, larger touch targets)

## 🔒 Security Considerations

- **Content Security Policy** ready
- **No external dependencies** (fully self-contained)
- **Local file serving** recommended for development
- **HTTPS required** for Web Share API functionality

## 🚀 Performance

- **Vanilla JavaScript** (no frameworks, ~3KB)
- **Pure CSS animations** (hardware accelerated)
- **Optimized assets** loading
- **Efficient DOM manipulation**
- **Progressive loading** with fallbacks

## 📈 Future Enhancements

- [ ] Volume control slider
- [ ] Playback speed controls
- [ ] Chapter/bookmark system
- [ ] Subtitle styling options
- [ ] Picture-in-picture mode
- [ ] Playlist functionality
- [ ] Analytics integration
- [ ] PWA capabilities

## 🛠️ Development

### Local Development
```bash
# Start development server
python3 -m http.server 8000

# Watch for changes (if using build tools)
npm run dev
```

### Code Structure
- **HTML**: Semantic, accessible markup
- **CSS**: BEM methodology, mobile-first
- **JavaScript**: ES6+, event-driven architecture
- **Assets**: Optimized for web delivery

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues, questions, or contributions, please refer to the project repository or documentation.

---

**Built with ❤️ and blockchain inspiration** 🔗✨