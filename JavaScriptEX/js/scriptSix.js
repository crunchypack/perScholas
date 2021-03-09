let width = prompt("Enter width: ");
let height = prompt("Enter height");
let widthBox = "";
let finalBox = "";
let spaces = 0;
let stars = width;
if (
  // Make sure numbers are entered.
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
  if (height > width / 2) {
    // Height cannot be higer than half of the width.
    console.log("Impossible size");
  } else {
    for (let row = 0; row < height; row++) {
      // Height determines the amount of rows
      for (let space = 0; space < spaces; space++) {
        widthBox += " ";
      }
      for (let star = 0; star < stars; star++) {
        widthBox += "*";
      }
      finalBox += widthBox + "\n";
      stars = stars - 2; // Remove stars and add spaces
      spaces++;
      widthBox = ""; // Reset row.
    }
  }
  console.log(finalBox);
} else {
  console.log("Please reload and actually type in numbers.");
}
