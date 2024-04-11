// Code for the sliding element
// Selecting the left side element by its ID
const left = document.getElementById("left-side");

// Function to handle mouse or touch movement events
const handleOnMove = e => {
    // Check if the mouse is over the specified elements
    if (e.target.classList.contains('side') || e.target.classList.contains('title') || e.target.classList.contains('highlight-word')) {
        // Calculate the percentage of mouse or touch position relative to window width,
        // then set the width of the left side element accordingly
        left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    }
}

// Event listener for mouse movement
document.onmousemove = e => handleOnMove(e);

// Event listener for touch movement
document.ontouchmove = e => {
    // Check if the touch is over the specified elements
    if (e.target.classList.contains('side') || e.target.classList.contains('title') || e.target.classList.contains('highlight-word')) {
        handleOnMove(e.touches[0]);
    }
}

// Glow Effect

const blob = document.getElementById("blob");

// Update the position of the blob on mousemove and scroll
window.addEventListener('mousemove', updateBlobPosition);
window.addEventListener('scroll', updateBlobPosition);

function updateBlobPosition(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    const scrollTop = window.scrollY || window.pageYOffset;

    // Animate the blob's position to follow the cursor with a delay
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY + scrollTop}px`
      }, { duration: 2000, fill: "forwards" }); // Animation duration and fill mode
}

// BEN PURCHASE effect

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&?";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    // Generate a random effect for the text
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 32)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30); // Interval for the text effect animation
}
