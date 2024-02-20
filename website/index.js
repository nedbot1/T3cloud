var count = 0;
var isDisplayed = true;
function onClick(e) {
  // count += 1;
  var smallHeader = document.getElementById("small-header");
  // smallHeader.innerText = "I've been clicked " + count + " times."
  smallHeader.style.display = isDisplayed ? "none" : "block";
  isDisplayed = !isDisplayed;
}

var myHeader = document.getElementById("my-header");

myHeader.addEventListener("click", onClick);
