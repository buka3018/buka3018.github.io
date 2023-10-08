// Select the .welcome-to-college element
const welcomeToCollege = document.querySelector('.back-to-home');

// Function to add underline on mouse enter
function addUnderlineOnMouseEnter() {
  // Add underline when the mouse enters
  welcomeToCollege.style.backgroundColor = 'yellow';
}

// Function to remove underline on mouse leave
function removeUnderlineOnMouseLeave() {
  // Remove the underline when the mouse leaves
  welcomeToCollege.style.backgroundColor = ''; // Remove the underline
}

// Add event listeners
welcomeToCollege.addEventListener('mouseenter', addUnderlineOnMouseEnter);
welcomeToCollege.addEventListener('mouseleave', removeUnderlineOnMouseLeave);

// Select the image element
const image = document.querySelector('.image-icon');

// Create a tooltip element
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

// Function to show the tooltip with image source
function showImageSource() {
  const source = image.getAttribute('data-source');
  tooltip.textContent = source;

  // Position the tooltip at the left bottom of the image
  const imageRect = image.getBoundingClientRect();
  tooltip.style.top = `${879}px`;
  tooltip.style.left = `${450}px`;
  tooltip.style.transform = 'translateY(10px)'; // Add some vertical offset

  // Append the tooltip to the body
  document.body.appendChild(tooltip);
}


// Function to hide the tooltip when the mouse leaves the image
function hideImageSource() {
  tooltip.textContent = ''; // Clear the tooltip content
  tooltip.remove(); // Remove the tooltip from the DOM
}

// Add event listeners to show/hide the tooltip
image.addEventListener('mouseenter', showImageSource);
image.addEventListener('mouseleave', hideImageSource);