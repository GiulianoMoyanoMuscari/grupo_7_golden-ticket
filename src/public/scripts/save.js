const buttons = document.querySelectorAll("[data-save]");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const numero = btn.dataset.save;
    console.log(numero);
  });
});
