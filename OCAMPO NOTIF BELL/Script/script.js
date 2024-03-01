const button = document.getElementById("_button");
const notification = document.getElementById("_notification");

button.addEventListener("click", () => {
  const coounter = Number(notification.getAttribute("data-count")) || 0;
  notification.setAttribute("data-count", coounter + 1);
  notification.classList.add("count");
  notification.classList.add("notify");
});

notification.addEventListener("animationend", () => {
  notification.classList.remove("notify");
});
