//========================================================================================================
// Welcome to College interactivity

// Select the .welcome-to-college element
const welcomeToCollege = document.querySelector('.welcome-to-college');
const arrowIcon = welcomeToCollege.querySelector('.arrow-icon');

// Function to add underline and grow arrow icon on mouse enter
function addUnderlineAndGrowArrowOnMouseEnter() {
  // Add underline to the text
  welcomeToCollege.style.textDecoration = 'underline';
  welcomeToCollege.style.textDecorationColor = "#58068C"; // Change the underline color
  welcomeToCollege.style.textDecorationThickness = '10px'; // Change the underline thickness

  // Increase the font size of the arrow icon
  arrowIcon.style.fontSize = '60px'; // You can set your desired size here
}

// Function to remove underline and reset arrow icon size on mouse leave
function removeUnderlineAndResetArrowOnMouseLeave() {
  // Remove the underline from the text
  welcomeToCollege.style.textDecoration = 'none';

  // Reset the font size of the arrow icon to the original size
  arrowIcon.style.fontSize = '40px'; // Set it back to the initial size
}

// Add event listeners
welcomeToCollege.addEventListener('mouseenter', addUnderlineAndGrowArrowOnMouseEnter);
welcomeToCollege.addEventListener('mouseleave', removeUnderlineAndResetArrowOnMouseLeave);


//========================================================================================================
// Blog chunk interactivity

// Select the .blog-1, .blog-2, and .blog-3 elements
const blog1 = document.querySelector('.blog-1');
const blog2 = document.querySelector('.blog-2');
const blog3 = document.querySelector('.blog-3');

// Function to change border radius and background color on mouse enter
function changeStylesOnMouseEnter() {
  const image = this.querySelector('.blog-1-child');
  const textElements = this.querySelectorAll('.how-nyuad-became, .dealing-with-the, .finding-community-at'); // Replace with the actual text element selectors
  image.style.borderRadius = '50px'; // You can set your desired border radius here
  textElements.forEach((text) => {
    text.style.backgroundColor = 'yellow'; // You can set your desired background color here
  });
}

// Function to reset border radius and background color on mouse leave
function resetStylesOnMouseLeave() {
  const image = this.querySelector('.blog-1-child');
  const textElements = this.querySelectorAll('.how-nyuad-became, .dealing-with-the, .finding-community-at'); // Replace with the actual text element selectors
  image.style.borderRadius = ''; // Set it back to the default or your original border radius
  textElements.forEach((text) => {
    text.style.backgroundColor = ''; // Set it back to the default or your original background color
  });
}

// Add event listeners to all blog sections
blog1.addEventListener('mouseenter', changeStylesOnMouseEnter);
blog1.addEventListener('mouseleave', resetStylesOnMouseLeave);

blog2.addEventListener('mouseenter', changeStylesOnMouseEnter);
blog2.addEventListener('mouseleave', resetStylesOnMouseLeave);

blog3.addEventListener('mouseenter', changeStylesOnMouseEnter);
blog3.addEventListener('mouseleave', resetStylesOnMouseLeave);

