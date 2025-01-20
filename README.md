# Etch-a-Sketch

## Project Overview
The Grid Sketchpad project is an interactive webpage that allows users to draw on a customizable grid by hovering over grid squares. This project provides hands-on practice with key JavaScript concepts, DOM manipulation, event listeners, and CSS Flexbox for layout.

## Features
- **Dynamic Grid Creation:**
  - The grid size can be customized by the user, with a maximum limit of 100 squares per side.
  - Squares are dynamically created using JavaScript.

- **Hover Effect:**
  - Hovering over a square changes its background color, simulating a "pen" effect.
  - The hover effect includes random color generation and a progressive darkening feature.

- **Reset Button:**
  - Allows users to clear the grid and create a new one with a specified size.
  
- **Responsive Design:**
  - The grid maintains its total width (960px) regardless of the number of squares.

## Technologies Used
- **HTML:** For the basic structure of the webpage.
- **CSS:** To style the grid and layout using Flexbox.
- **JavaScript:** For dynamically generating the grid, handling user interactions, and implementing hover effects.

---

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- Basic understanding of HTML, CSS, and JavaScript.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/grid-sketchpad.git
   ```
2. Navigate to the project directory:
   ```bash
   cd grid-sketchpad
   ```
3. Open `index.html` in your web browser.

---

## Usage Instructions

1. Open the webpage.
2. A 16x16 grid is displayed by default.
3. Hover over the squares to change their colors.
4. Click the "Reset Grid" button to:
   - Enter a new grid size (e.g., 64 for a 64x64 grid).
   - Generate the new grid in the same 960px space.
5. Experiment with hovering to see:
   - Randomized colors on first hover.
   - Progressive darkening with subsequent hovers.

---

## Code Structure

### HTML
- Contains a `div` for the grid container and a button for resetting the grid.

### CSS
- Uses Flexbox for arranging grid squares.
- Styling includes hover effects, consistent square sizes, and layout responsiveness.

### JavaScript
- Handles:
  - Grid creation and resetting (`createGrid` function).
  - Event listeners for hover and click interactions.
  - Dynamic square styling with random colors and darkening effects.

---

## Future Enhancements
- **Advanced Drawing Features:**
  - Support for click-and-drag drawing.
  - Custom color palette selection.
- **Performance Optimization:**
  - Enhance performance for larger grids.
- **Mobile Support:**
  - Improve responsiveness for touch devices.

---

## Acknowledgments
This project was inspired by the need to practice core JavaScript and Flexbox skills. It is part of a foundational web development curriculum.

---

## License
This project is licensed under the MIT License. Feel free to use and modify the code as needed.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

