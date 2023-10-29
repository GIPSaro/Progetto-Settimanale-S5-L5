let M = document.querySelectorAll(`g[
stroke-linecap="butt"]`);
setInterval(() => {
  let random = Math.round(Math.random() * (M.length - 1));
  M[random].classList.toggle("invisible");
}, 100);
