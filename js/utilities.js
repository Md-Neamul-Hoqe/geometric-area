console.clear();
const outputArea = document.getElementById("output");

/* Get Input Values of the geometry */
function getInputValue(fieldId) {
  const eField = document.getElementById(fieldId);
  const eString = eField.value;
  const eValue = parseFloat(eString);
  eField.value = "";
  return eValue;
}

/* Add result list to the output area */
function outputShow(fieldId, areaFloat) {
  const area = areaFloat.toFixed(2);
  const No = outputArea.children.length;
  const eField = document.getElementById(fieldId);
  const title = eField.parentElement.parentElement.children[1].innerText;
  const li = document.createElement("li");
  li.setAttribute("class", "flex justify-between items-center gap-2");
  li.innerHTML = `<span>${
    No + 1
  }. ${title}</span><span><span>${area}</span> cm<sup>2</sup></span><button class="px-[10px] py-[7px]">Convert to m<sup>2</sup></button>`;
  outputArea.appendChild(li);
  console.log(title, ": ", area);
  return;
}

/* Unit Convertion cm to m vs m to cm */
outputArea.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    if (e.target.innerHTML === `Convert to m<sup>2</sup>`) {
      const areaString =
        e.target.parentElement.children[1].children[0].innerText;
      const area = parseFloat(areaString);
      e.target.parentElement.children[1].innerHTML = `<span>${(
        area / 10000
      ).toFixed(5)}</span> m<sup>2</sup>`;
      e.target.innerHTML = `Convert to cm<sup>2</sup>`;
    } else {
      const areaString =
        e.target.parentElement.children[1].children[0].innerText;
      const area = parseFloat(areaString);
      e.target.parentElement.children[1].innerHTML = `<span>${(
        area * 10000
      ).toFixed(5)}</span> cm<sup>2</sup>`;
      e.target.innerHTML = `Convert to m<sup>2</sup>`;
    }
  }
});
