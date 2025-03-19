const container = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector('#grid-size');
const resetButton = document.querySelector('#reset');
const colorButton = document.querySelector('#color');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');

let currentColor = 'black'; // Default color is black

// Function to create a grid of a given size
function createGrid(size) {
  container.innerHTML = ''; // Clear the existing grid

  const squareSize = 400 / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // Add the event listener to change color on hover
    div.addEventListener('mouseover', function () {
      if (currentColor === 'rainbow') {
        div.style.backgroundColor = getRandomColor();
      } else if (currentColor === 'eraser') {
        div.style.backgroundColor = 'rgb(247, 158, 3)'; // Erase to the original color
      } else {
        div.style.backgroundColor = currentColor;
      }
    });

    container.appendChild(div);
  }
}

// Function to generate a random RGB color (for rainbow effect)
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Reset the grid (clear all colors)
resetButton.addEventListener('click', () => createGrid(16));

// Set color to black
blackButton.addEventListener('click', () => {
  currentColor = 'black';
});

// Set color to a custom color chosen by the user
colorButton.addEventListener('click', () => {
  const color = prompt('Enter a color:');
  currentColor = color ? color : 'black'; // Default to black if no color is entered
});

// Set color to rainbow effect
rainbowButton.addEventListener('click', () => {
  currentColor = 'rainbow';
});

// Set color to the original grid color (eraser)
eraserButton.addEventListener('click', () => {
  currentColor = 'eraser';
});

// Create a grid of 16x16 by default
createGrid(16);

// Allow the user to create a custom grid size
gridSizeButton.addEventListener('click', () => {
  const input = prompt('Enter the number of squares per side (1-100):');
  const size = parseInt(input, 10);

  if (isNaN(size) || size < 1 || size > 100) {
    alert('Please enter a valid number between 1 and 100.');
  } else {
    createGrid(size);
  }
});
