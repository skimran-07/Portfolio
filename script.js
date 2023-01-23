let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};


// Progress bar
// const skillsSection = document.getElementById('skills-section');

// const progressBars = document.querySelectorAll('.progress-bar');

// function showProgress(){
//   progressBars.forEach(progressBars=>{
//     const value = progressBars.dataset.progress;
//     progressBars.style.opacity = 1;
//     progressBars.style.width = `$(value)%`;

//   });
// }

// function hideProgress() {
//   progressBars.forEach(p =>{
//     p.style.opacity = 0;
//     p.style.width = 0;
//   });
// }

// window.addEventListener('scroll',()=>{
//   const sectionPos = skillsSection.getBoundingClientRect().top;
//   const screenPos = window.innerHeight / 2;

//   if(sectionPos < screenPos){
//     showProgress();
//   }else{
//     hideProgress();
//   }
// });