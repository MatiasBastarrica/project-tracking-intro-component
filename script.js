const navIcon = document.querySelector(".nav-icon");
const dialog = document.querySelector("dialog");
const mobileNav = {
  isOpen: false,
};

navIcon.addEventListener("click", () => {
  const iconImg = navIcon.querySelector("img");
  if (!mobileNav.isOpen) {
    dialog.show();
    mobileNav.isOpen = true;
    iconImg.setAttribute("img", "./images/icon-close.svg");
  } else {
    dialog.close();
    mobileNav.isOpen = false;
    iconImg.setAttribute("img", "./images/icon-hamburger.svg");
  }
});
