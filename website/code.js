const pages = [
  { name: "Home", link: "./index.html" },
  { name: "Sudoku", link: "./sudoku.html" },
  { name: "Page 2", link: "./page2.html" },
  { name: "Page 3", link: "./page3.html" },
];

const topNav = document.getElementById("top-nav");

for (var i = 0; i < pages.length; i++) {
  const newLink = document.createElement("a");
  newLink.setAttribute("href", pages[i].link);
  newLink.setAttribute("class", "top-nav-link");
  newLink.innerText = pages[i].name;
  topNav.appendChild(newLink);
}

const sudokuContainer = document.getElementById("sudoku-container");

for (var i = 0; i < 9; i += 1) {
  const newRow = document.createElement("div");
  newRow.setAttribute("class", "sudoku-row");
  sudokuContainer.appendChild(newRow);
  for (var j = 0; j < 9; j += 1) {
    const newSquare = document.createElement("div");
    newSquare.setAttribute("class", "sudoku-square");
    newRow.appendChild(newSquare);
  }
}

var count = 0;
// var isDisplayed = true;
function onClick(e) {
  count += 1;
  var smallHeader = document.getElementById("small-header");
  smallHeader.innerText = "I've been clicked " + count + " times.";
  // smallHeader.style.display = isDisplayed ? "none" : "block"
  // isDisplayed = !isDisplayed
}

var myHeader = document.getElementById("my-header");

myHeader.addEventListener("click", onClick);
