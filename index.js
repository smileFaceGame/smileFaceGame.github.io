function rando() {
  document.getElementById("smile").style.gridRow = Math.ceil(Math.random() * 4);
  document.getElementById("smile").style.gridColumn = Math.ceil(
    Math.random() * 4
  );
}
setInterval(rando, 1000);
var count = 000;
document.getElementById("smile").addEventListener("click", click);
function click() {
  console.log("hi");
  count += 100;
  document.getElementById("head").innerHTML = "Points: " + count;
}
console.log();
let classes = document.getElementsByClassName("other");
for (let i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", otherClick);
}
function otherClick() {
  console.log("bye");
  count -= 100;
  document.getElementById("head").innerHTML = "Points: " + count;
}