let width = prompt("Enter width: ");
let height = prompt("Enter height");
let finalBox = "";
if (
  !isNaN(Number(width)) &&
  !isNaN(Number(height)) &&
  width != "" &&
  height != "" &&
  width != null &&
  height != null
) {
  console.log("Input width: " + width);
  console.log("Input height: " + height);
  console.log(" ");
  console.log("Shape:");
  for (let row = 0; row < height; row++) {
    // Here we use nested loops.
    for (let col = 0; col < width; col++) {
      if (row % 2 != 0 && (col == 0 || col == width - 1)) {
        // Every even row replaces firs and last star with space.
        finalBox += " ";
      } else {
        finalBox += "*";
      }
    }
    finalBox += "\n";
  }

  console.log(finalBox);
} else {
  console.log("Please reload and actually type in numbers.");
}
