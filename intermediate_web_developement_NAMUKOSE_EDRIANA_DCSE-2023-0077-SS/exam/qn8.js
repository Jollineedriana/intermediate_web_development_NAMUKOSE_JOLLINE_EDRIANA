function changeTextColorOnMouseOver(elementId) {
  const element = document.getElementById(elementId);
  element.addEventListener("mouseover", function() {
    element.style.color = "blue";
  });
}
