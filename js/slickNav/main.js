window.onscroll = () => {
  const scroll = window.scrollY;
  fixedMenu(scroll);
};
// Adds a fixed menu on top
function fixedMenu(scroll) {
  const headerScroll = document.querySelector(".header-nav");

  // In the case that the scroll is greater than 300 add some classes
  if (scroll > 300) {
    headerScroll.classList.add("fixed-top");
  } else {
    headerScroll.classList.remove("fixed-top");
  }
}
