const $btnToggle = document.getElementById("btn-toggle");
const $btn = document.getElementById("btn");

$btnToggle.addEventListener("click", () => {
  $btn.classList.add("active");
});
