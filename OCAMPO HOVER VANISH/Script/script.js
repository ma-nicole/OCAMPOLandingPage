for (let index = 0; index < 2000; index++) {
  const element = document.createElement("span");
  element.addEventListener('mouseover', function() {
    this.classList.add('permanent');
  });
  document.querySelector(".container").appendChild(element);
}