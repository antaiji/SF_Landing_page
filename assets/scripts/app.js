//****************************************//
// DROPDOWN MENU //
//****************************************//
const menuToggler = document.querySelector(".navbar__menu-toggler");
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar__menu-block");
const navbarLinks = document.querySelectorAll(
  ".navbar__menu .navbar__menu-link"
);

function dropdownToggler() {
  let myTimeout;

  navbar.classList.toggle("show-menu");

  if (navbar.classList.contains("show-menu")) {
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";

    myTimeout = setTimeout(() => {
      navbarMenu.style.overflow = "visible";
    }, 280);

    clearTimeout(myTimeout);
  } else {
    navbarMenu.removeAttribute("style");
  }
}

menuToggler.addEventListener("click", dropdownToggler);

navbarLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
    navbarMenu.removeAttribute("style");
  })
);

// Remove "show-menu" class when strech window with open menu above 992px
visualViewport.addEventListener("resize", function () {
  if (visualViewport.width > 991 && navbar.classList.contains("show-menu")) {
    dropdownToggler();
  }
});

//****************************************//
// GALLERY //
//****************************************//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(
    ".projects__show .projects__show-image"
  );
  let dots = document.querySelectorAll(".projects__handlers .projects__bullet");
  let titles = document.querySelectorAll(
    ".projects__show-titles .projects__show-title"
  );
  let projects = document.querySelectorAll(".projects__info--project");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      " projects__bullet--active",
      ""
    );
  }

  for (i = 0; i < titles.length; i++) {
    titles[i].className = titles[i].className.replace(
      " projects__show-title--active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " projects__bullet--active";
  titles[slideIndex - 1].className += " projects__show-title--active";
  projects[slideIndex - 1].style.display = "flex";
}

/** STYLES SLIDES **/
let stSlideIndex = 1;
showStSlides(stSlideIndex);

function plusStSlides(n) {
  showStSlides((stSlideIndex += n));
}

function showStSlides(n) {
  let i;
  let stSlides = document.querySelectorAll(".styles__show .styles__show-image");

  if (n > stSlides.length) {
    stSlideIndex = 1;
  }

  if (n < 1) {
    stSlideIndex = stSlides.length;
  }

  for (i = 0; i < stSlides.length; i++) {
    stSlides[i].style.display = "none";
  }

  stSlides[stSlideIndex - 1].style.display = "block";
}

//****************************************//
// VIDEO //
//****************************************//
const promoVideo = document.getElementById("control-video");
let controls = document.querySelector(".control__video-controls");

function playPause() {
  controls.classList.toggle("playing-now");

  if (promoVideo.paused) {
    promoVideo.play();
    controls.style.opacity = "0";
  } else {
    promoVideo.pause();
    controls.style.opacity = "1";
  }

  if (promoVideo.ended) {
    controls.classList.toggle("playing-now");
  }
}

promoVideo.addEventListener("ended", (event) => {
  controls.classList.toggle("playing-now");
  controls.style.opacity = "1";
});

//****************************************//
// MODAL //
//****************************************//

const modal = document.querySelector("#modal-overlay");
const modalBtn = document.querySelector(".navbar__cta .navbar__cta-button");
const closeBtn = document.querySelector(".modal__toggler-icon");
const submitBtn = document.querySelector(".modal__button-submit");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
}

function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
