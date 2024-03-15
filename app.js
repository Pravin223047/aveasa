let menuIcon = document.getElementById("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let top = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPosition >= top - 150 && scrollPosition < top + height - 150) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      let correspondingLink = document.querySelector(
        `header nav a[href="#${id}"]`
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
