function getInput() {
    let input = Number(document.getElementById("input").value);
    document.getElementById("display-something").innerText = sumAllNumbers(input);
  }
  function sumAllNumbers(num) {
    let total = 0;
    for (var i = num; i >= 0; --i) {
      console.log(i);
      total += i;
    }
    return total;
  }
  function displaySum() {
    let input = Number(document.getElementById("input").value);
    let input2 = Number(document.getElementById("input2").value);
    document.getElementById("display-something").innerText = input + input2;
  }
  