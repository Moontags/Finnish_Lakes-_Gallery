// Select the next and previous buttons
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// Select all slides and the elements for title, description, and info box
const slides = document.querySelectorAll(".slide");
const lakeTitle = document.getElementById("lake-title");
const lakeDescription = document.getElementById("lake-description");
const lakeInfo = document.getElementById("lake-info");

// Initialize the slide number
let slideNumber = 0;

// Display the first slide and its information initially
slides[slideNumber].classList.add("active");
updateLakeInfo(slides[slideNumber]);

// Function to update the title, description, and info box content
function updateLakeInfo(slide) {
  // Set the title and description text from data attributes
  lakeTitle.textContent = slide.getAttribute("data-title");
  lakeDescription.textContent = slide.getAttribute("data-description");

  // Get info text from data attribute and clear existing content in the info box
  const infoText = slide.getAttribute("data-info");
  lakeInfo.innerHTML = ""; // Clear the info box

  // Create a list in the info box
  const infoListItems = infoText.split("|").map((item) => item.trim());
  infoListItems.forEach((item) => {
    const li = document.createElement("li"); // Create a list item
    li.textContent = item; // Set its content
    lakeInfo.appendChild(li); // Append to the info box
  });
}

// Event handler for the next button
nextBtn.onclick = () => {
  slides[slideNumber].classList.remove("active"); // Hide the current slide
  slideNumber = (slideNumber + 1) % slides.length; // Move to the next slide, looping back to the first
  slides[slideNumber].classList.add("active"); // Show the new current slide
  updateLakeInfo(slides[slideNumber]); // Update title, description, and info box
};

// Event handler for the previous button
prevBtn.onclick = () => {
  slides[slideNumber].classList.remove("active"); // Hide the current slide
  slideNumber = (slideNumber - 1 + slides.length) % slides.length; // Move to the previous slide, looping back to the last
  slides[slideNumber].classList.add("active"); // Show the new current slide
  updateLakeInfo(slides[slideNumber]); // Update title, description, and info box
};
