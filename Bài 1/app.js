
function isNguyenTo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumNguyenTo(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (isNguyenTo(i)) {
      sum += i;
    }
  }
  return sum;
}


document.getElementById("submit").addEventListener("click", function () {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  if (a >= b) {
    alert("a must be less than b");
    return;
  }
  const sum = sumNguyenTo(a, b);
  document.getElementById("result").innerHTML = "Tổng các số nguyên trong khoảng " + a + " and " + b + ": " + sum;
});
