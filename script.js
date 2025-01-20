// Select the container element where the grid will be displayed
const container = document.querySelector('.container');

// Select the reset button
const resetButton = document.querySelector('#reset-grid');

// Create an initial 16x16 grid when the page loads
createGrid(16);

// Add a click event listener to the reset button
resetButton.addEventListener('click', () => {
    // Prompt the user to enter a new grid size
    let gridSize = prompt('Enter grid size (maximum 100):', 16);
    gridSize = parseInt(gridSize); // Convert the input to a number

    // Check if the input is valid (between 1 and 100)
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize); // Create a new grid with the specified size
    } else {
        // Alert the user if the input is invalid
        alert('Please enter a number between 1 and 100.');
    }
});

/**
 * Function to create a grid with the specified number of squares per side
 * @param {number} size - The number of squares per row and column
 */
function createGrid(size) {
    // Clear any existing grid elements
    container.innerHTML = '';

    // Calculate the size of each square in pixels
    const squareSize = 960 / size;

    // Create the specified number of squares (size * size for a full grid)
    for (let i = 0; i < size * size; i++) {
        // Create a new div element for each square
        const square = document.createElement('div');
        
        // Add a class to the square for styling
        square.classList.add('grid-square');

        // Use flexbox to size each square dynamically
        square.style.flex = `1 0 calc(100% / ${size})`; // Sets width
        square.style.height = `${squareSize}px`; // Sets height based on grid size

        // Add a hover event listener to the square
        square.addEventListener('mouseover', () => {
            // Get the current background color of the square, defaulting to white
            let currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
            const darkenStep = 10; // Amount to darken with each hover

            // Extract the RGB values from the current color
            let rgb = currentColor.match(/\d+/g).map(Number); // Extract numbers from "rgb(r, g, b)"
            if (!rgb) return; // Exit if no RGB values are found

            // Calculate the new RGB values by subtracting the darken step
            rgb = rgb.map(value => Math.max(value - darkenStep, 0));
            square.style.backgroundColor = `rgb(${rgb.join(',')})`; // Update the background color

            // If the square doesn't already have a color, assign a random one
            if (!square.dataset.color) {
                const randomColor = generateRandomColor(); // Generate a random RGB color
                square.style.backgroundColor = randomColor; // Set the background color
                square.dataset.color = randomColor; // Store the random color for reference
            }
        });

        // Add the square to the container
        container.appendChild(square);
    }
}

/**
 * Function to generate a random RGB color
 * @returns {string} - A random color in the format "rgb(r, g, b)"
 */
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Return the random color as a string
}
