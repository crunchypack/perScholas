function square() {
  let valid = true;
  let num = parseInt(prompt("Enter number: "));
  do {
    if (num < 0 || num > 100 || num == null || num == "" || isNaN(num)) {
      valid = true;
    } else {
      valid = false;
      continue;
    }
    num = parseInt(prompt("Please re-enter"));
  } while (valid);
  console.log(num * num);
}
function interval() {
  let valid = true;
  let lower = parseInt(prompt("Enter lower number: "));
  let upper = parseInt(prompt("Enter upper number"));
  let interval = new Array();
  do {
    if (lower > upper) {
      valid = true;
    } else {
      valid = false;
      continue;
    }
    lower = parseInt(prompt("Please re-enter lower: "));
    upper = parseInt(prompt("Please re-enter upper: "));
  } while (valid);
  for (let i = lower; i < upper; i++) {
    interval.push(i);
  }
  let text = interval.join(" ");
  console.log(text);
}
function editArr() {
  let myData = new Array(10);
  for (let i = 0; i < myData.length; i++) {
    myData[i] = 1;
  }
  let valid = true;
  do {
    let items = myData.join(" ");
    console.log(items);
    let cell = parseInt(prompt("Enter index:"));

    if (cell > myData.length - 1 || cell < 0) {
      valid = false;
      console.log("Index out of range! Exit!");
      continue;
    }
    let val = parseInt(prompt("Enter value: "));
    myData[cell] = val;
  } while (valid);
}
function fibonacci() {
  let fibo = new Array(60);
  fibo[0] = 0;
  fibo[1] = 1;
  for (let i = 2; i < fibo.length; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  for (let i = 0; i < fibo.length; i++) {
    console.log(fibo[i]);
  }
}
