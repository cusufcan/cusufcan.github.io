// 0 & 1 GENERATOR
function addRandomBinaryItems(container, count) {
  for (let i = 0; i < count; i++) {
    const binaryItem = document.createElement("div");
    binaryItem.classList.add("binary-item");
    binaryItem.textContent = Math.random() < 0.5 ? "0" : "1";
    container.appendChild(binaryItem);
  }
}

// ON PAGE LOADED
document.addEventListener("DOMContentLoaded", function () {
  const binaryContainer = document.getElementById("binary-container");
  const itemCount = 7000;
  addRandomBinaryItems(binaryContainer, itemCount);
});
