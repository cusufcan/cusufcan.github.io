var sectionDOM = document.querySelector("#section");

for (let i = 0; i < 5000; i++) {
  var tempSpanDOM = document.createElement("span");
  tempSpanDOM.innerHTML = Math.round(Math.random()).toString();
  sectionDOM.appendChild(tempSpanDOM);
}
