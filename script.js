// Initialize language as Finnish by default
let currentLanguage = "fi";

const lakeTitle = document.getElementById("lake-title");
const lakeDescription = document.getElementById("lake-description");
const lakeInfo = document.getElementById("lake-info");
const infoTitle = document.getElementById("info-title");

// Function to update content based on the selected language
function updateLakeInfo(slide) {
  lakeTitle.textContent = slide.getAttribute(`data-title-${currentLanguage}`);
  lakeDescription.textContent = slide.getAttribute(
    `data-description-${currentLanguage}`
  );

  // Update the info box according to the selected language
  const infoText = slide.getAttribute(`data-info-${currentLanguage}`);
  lakeInfo.innerHTML = ""; // Clear previous content

  infoText.split("|").forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.trim();
    lakeInfo.appendChild(li);
  });

  // Update navigation buttons' state based on the current slide
  updateNavButtons();
}

// Function to update navigation buttons' state
function updateNavButtons() {
  nextBtn.disabled = slideNumber === slides.length - 1; // Disable Next on the last slide
  prevBtn.disabled = slideNumber === 0; // Disable Previous on the first slide
}

// Function to switch language
function setLanguage(lang) {
  currentLanguage = lang;
  updateLakeInfo(document.querySelector(".slide.active"));
}

// Navigation between slides
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
let slideNumber = 0;

// Show the first slide
slides[slideNumber].classList.add("active");
updateLakeInfo(slides[slideNumber]);

// Next button functionality
nextBtn.onclick = () => {
  if (slideNumber < slides.length - 1) {
    // Check if it's not the last slide
    slides[slideNumber].classList.remove("active");
    slideNumber++;
    slides[slideNumber].classList.add("active");
    updateLakeInfo(slides[slideNumber]);
  }
};

// Previous button functionality
prevBtn.onclick = () => {
  if (slideNumber > 0) {
    // Check if it's not the first slide
    slides[slideNumber].classList.remove("active");
    slideNumber--;
    slides[slideNumber].classList.add("active");
    updateLakeInfo(slides[slideNumber]);
  }
};

// Initialize button states
updateNavButtons();
