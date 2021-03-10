function sum() {
  let ints = prompt("Enter numbers, separate with space");
  let arr = ints.split(" ");
  console.log(arr);
  let sum = 0;
  arr.forEach(function (v) {
    sum += parseInt(v);
  });
  var node = document.createElement("p"); // Create a <li> node
  var textnode = document.createTextNode(sum); // Create a text node
  node.appendChild(textnode);
  document.getElementById("container").appendChild(node);
}
function calculator() {
  let ints = prompt("Enter math formula (positive integers only): ");
  ints = ints.replace(/ /g, ""); // remove spaces
  let result = 0; // get each expression on array

  for (let i = 0; i < ints.length; i++) {
    // Go through each character
    if (!isNaN(ints[i]) && ints[i] != "+" && ints[i] != "-") {
      // if its a number
      let fullNum = "";

      while (
        i < ints.length &&
        !isNaN(ints[i]) &&
        ints[i] != "+" &&
        ints[i] != "-"
      ) {
        fullNum += ints[i]; // add each following number until comming accross operator
        i++;
      }
      result += parseInt(fullNum); // add the full number to result
      i--; // go back one character to check operator
      continue;
    } else if (ints[i] == "-") {
      // if operator is minus (-)
      let fullNum = "";
      while (i < ints.length && !isNaN(ints[i + 1])) {
        fullNum += ints[i + 1]; // same as above, get the full number, but we are starting after the minus (-)
        i++;
      }
      result -= fullNum; // substract from result
      continue;
    }
  }
  console.log(result);
}
function calculator2() {
  let ints = prompt("Enter math formula (positive integers only): ");
  ints = ints.replace(/ /g, ""); // remove spaces
  let arr = ints.split(";"); // get each expression on array

  for (let i = 0; i < arr.length; i++) {
    // Run through each array element
    let result = 0;
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      // Go through each character
      if (!isNaN(arr[i][j]) && arr[i][j] != "+" && arr[i][j] != "-") {
        // if its a number
        let fullNum = "";
        while (
          j < arr[i].length &&
          !isNaN(arr[i][j]) &&
          arr[i][j] != "+" &&
          arr[i][j] != "-"
        ) {
          fullNum += arr[i][j]; // add each following number until comming accross operator
          j++;
        }
        result += parseInt(fullNum); // add the full number to result
        j--; // go back one character to check operator
        continue;
      } else if (arr[i][j] == "-") {
        // if operator is minus (-)
        let fullNum = "";
        while (i < arr[i].length && !isNaN(arr[i][j + 1])) {
          // same as above, get the full number, but we are starting after the minus (-)
          fullNum += arr[i][j + 1];
          j++;
        }
        result -= fullNum; // substract from result
        continue;
      }
    }
    console.log(result);
  }
}
function calculator3() {
  let ints = prompt("Enter math formula (positive integers only): ");
  ints = ints.replace(/ /g, ""); // remove spaces
  let arr = ints.split(";"); // get each expression on array

  for (let i = 0; i < arr.length; i++) {
    // Run through each array element
    let result = 0;
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      // Go through each character
      if (!isNaN(arr[i][j]) && arr[i][j] != "+" && arr[i][j] != "-") {
        // if its a number
        let fullNum = "";
        while (
          j < arr[i].length &&
          !isNaN(arr[i][j]) &&
          arr[i][j] != "+" &&
          arr[i][j] != "-" &&
          arr[i][j] != "^"
        ) {
          fullNum += arr[i][j]; // add each following number until comming accross operator
          j++;
        }
        if (arr[i][j] == "^") {
          // if the next symbol is a ^ then we square the fullnumber
          fullNum = fullNum * fullNum;
        }
        result += parseInt(fullNum); // add the full number to result
        j--; // go back one character to check operator
        continue;
      } else if (arr[i][j] == "-") {
        // if operator is minus (-)
        let fullNum = "";
        while (i < arr[i].length && !isNaN(arr[i][j + 1])) {
          // same as above, get the full number, but we are starting after the minus (-)
          fullNum += arr[i][j + 1];
          j++;
        }
        if (arr[i][j + 1] == "^") {
          fullNum = fullNum * fullNum;
        }
        result -= fullNum; // substract from result
        continue;
      }
    }
    console.log(result);
  }
}
