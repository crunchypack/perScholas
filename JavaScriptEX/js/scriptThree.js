let dim = prompt("Enter dimension: ");

let finalBox = "";
if (!isNaN(Number(dim)) && dim != "" && dim != null) {
  console.log("Input dimension: " + dim);
  console.log(" ");
  console.log("Shape:");
  for (let row = 0; row < dim; row++) {
    for (let col = 0; col < dim; col++) {
      // A star should apear when the column is the same as the row (1,1), (2,2)....
      if (row == col || col == dim - (row + 1)) finalBox += "*";
      // But also at the other side (1,7), (2,6)... in the case of dim = 8
      // Don't forget off-by-one errors
      else finalBox += " ";
    }
    finalBox += "\n";
  }

  console.log(finalBox);
} else {
  console.log("Please reload and actually type in numbers.");
}
