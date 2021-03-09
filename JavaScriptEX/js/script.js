let width = prompt("Enter width: ");
let height = prompt("Enter height");
let widthBox = "";
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
  for (let i = 0; i < width; i++) {
    // Nested for-loops is also possible
    widthBox += "*"; // But since each row has the same amount of stars, we can run this once
  }
  for (let i = 0; i < height; i++) {
    finalBox += widthBox + "\n";
  }

  console.log(finalBox);
} else {
  console.log("Please reload and actually type in numbers.");
}
