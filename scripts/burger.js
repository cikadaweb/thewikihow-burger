const burger = document.querySelector(".header__burger");
if (burger) {
  const menuBody = document.querySelector(".menu__body");
  burger.addEventListener("click", () => {
    document.body.classList.toggle("_lock"); // запрещаем скролл сайта
    burger.classList.toggle("_active");
    menuBody.classList.toggle("_active"); // появление меню
  });
}
