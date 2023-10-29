let M = document.querySelectorAll(`g[
stroke-linecap="butt"]`);
setInterval(() => {
  let random = Math.round(Math.random() * (M.length - 1));
  M[random].classList.toggle("invisible");
}, 100);

/* funzione per trasformare allo scrool la navbar bianca e bottone verde*/
window.addEventListener("scroll", function () {
  let navBar = document.getElementById("navContainer");
  let btn = document.getElementById("btnGetStarted");
  let eventScroll = window.scrollY;
  if (eventScroll > 200) {
    navBar.style.backgroundColor = "white";
    btn.style.backgroundColor = `#1a8917`;
  } else {
    navBar.style.backgroundColor = `#ffc017`;
    btn.style.backgroundColor = `#191919`;
  }
});
