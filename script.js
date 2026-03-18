function askGridSize() {
  console.log("askGridSize function invoked");
  const gridSize = prompt(
    "enter the number of boxes per side for the new grid(must not exceed 100)",
    "10",
  );
  console.log("number entered = ", gridSize);
  return gridSize;
}
function createGrid(gridSize) {
  let h = (window.innerHeight - 100) / gridSize;
  const grid = document.createElement("div");
  grid.classList.add("grid");
  const row = document.createElement("div");
  row.classList.add("row");
  const column = document.createElement("div");
  column.classList.add("column");

  //column.textContent="hello";
  for (let i = 1; i <= gridSize; i++) row.appendChild(column.cloneNode(true));
  for (let i = 1; i <= gridSize; i++) grid.appendChild(row.cloneNode(true));
  document.body.appendChild(grid);
  let allCol = document.querySelectorAll(".column");
  allCol.forEach((x) => resizer(x, h));
}
function resetPage() {
  console.log("resetPage function invoked");
  
  document.querySelector("body").removeChild(document.querySelector(".grid"))
  createGrid(askGridSize());
  let allCol = document.querySelectorAll(".column");
  allCol.forEach((x) => {
    x.addEventListener("mouseenter", (e) => changeColor(e.target));
  });
}
function changeColor(x) {
  x.style.backgroundColor = "red";
}
 function resizer(x, h) {
  console.log("resizer function invoked")
  x.style.height = h + "px";
  x.style.width = h + "px";
}
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", ()=>resetPage());

createGrid(askGridSize());
let allCol = document.querySelectorAll(".column");
allCol.forEach((x) => {
  x.addEventListener("mouseenter", (e) => changeColor(e.target));
});




