// Select elements to apply the parallax effect to
const header = document.getElementById('header');
const frame1 = document.getElementById('frame-1');
const frame2 = document.getElementById('frame-2');
const frame3 = document.getElementById('frame-3');
const frame4 = document.getElementById('frame-4');

const frame1_text1 = document.getElementById('frame-1-text1');
const frame1_text2 = document.getElementById('frame-1-text2');

const frame2_text = document.getElementById('frame-2-text');

// Define a maximum scale value
const maxScale = 1.5; // Adjust this value as needed

// Function to update the parallax effect based on scroll position
function updateParallax() {
    // Get the vertical scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Adjust the positions of the header based on scroll position
    header.style.transform = `translateY(${scrollY * 0.4}px)`;

    // Calculate the scale factor for frame-1-text1 and frame-1-text2 based on scroll position
    let scale1 = 1 + (maxScale - 1) * (scrollY - frame1.offsetTop) / frame1.clientHeight;
    scale1 = Math.min(maxScale, Math.max(1, scale1));

    // Calculate the scale factor for frame-2-text based on scroll position
    let scale2 = 1 + (maxScale - 1) * (scrollY - frame2.offsetTop) / frame2.clientHeight;
    scale2 = Math.min(maxScale, Math.max(1, scale2));

    // Apply the scale transform to frame-1-text1 and frame-1-text2
    frame1_text1.style.transform = `scale(${scale1})`;
    frame1_text2.style.transform = `scale(${scale1})`;

    // Apply the scale transform to frame-2-text
    frame2_text.style.transform = `scale(${scale2})`;
}

// Add a scroll event listener to trigger the parallax effect
window.addEventListener('scroll', updateParallax);