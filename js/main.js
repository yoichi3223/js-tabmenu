// "use strict";
// {
//   const menuItems = document.querySelectorAll(".menu li a");
//   const contens = document.querySelectorAll(".content");

//   menuItems.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault();
//       menuItems.forEach((item) => {
//         item.classList.remove("active");
//       });
//       item.classList.add("active");
//       contens.forEach((content) => {
//         content.classList.remove("active");
//       });
//       document.getElementById("clickedItem.dataset.id").classList.add("active");
//     });
//   });
// }
"use strict";

{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      clickedItem.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      document.getElementById(clickedItem.dataset.id).classList.add("active");
    });
  });
}
