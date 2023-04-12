function numberOneTriangle() {
  let num = document.getElementById("input").value;
  let tnt = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      tnt += "*";
    }
    tnt += "<br>";
  }
  document.getElementById("output").innerHTML = tnt;
}