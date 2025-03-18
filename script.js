

let currentLanguage = "fi";

const lakeTitle = document.getElementById("lake-title");
const lakeDescription = document.getElementById("lake-description");
const lakeInfo = document.getElementById("lake-info");
const infoTitle = document.getElementById("info-title");

function updateLakeInfo(slide) {
  lakeTitle.textContent = slide.getAttribute(`data-title-${currentLanguage}`);
  lakeDescription.textContent = slide.getAttribute(
    `data-description-${currentLanguage}`
  );

  const infoText = slide.getAttribute(`data-info-${currentLanguage}`);
  lakeInfo.innerHTML = ""; 

  infoText.split("|").forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.trim();
    lakeInfo.appendChild(li);
  });


  updateNavButtons();
}

function updateNavButtons() {
  nextBtn.disabled = slideNumber === slides.length - 1; 
  prevBtn.disabled = slideNumber === 0; 
}


function setLanguage(lang) {
  currentLanguage = lang;
  updateLakeInfo(document.querySelector(".slide.active"));
}



const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
let slideNumber = 0;



slides[slideNumber].classList.add("active");
updateLakeInfo(slides[slideNumber]);


nextBtn.onclick = () => {
  if (slideNumber < slides.length - 1) {

    slides[slideNumber].classList.remove("active");
    slideNumber++;
    slides[slideNumber].classList.add("active");
    updateLakeInfo(slides[slideNumber]);
  }
};


prevBtn.onclick = () => {
  if (slideNumber > 0) {

    slides[slideNumber].classList.remove("active");
    slideNumber--;
    slides[slideNumber].classList.add("active");
    updateLakeInfo(slides[slideNumber]);
  }
};



updateNavButtons();
