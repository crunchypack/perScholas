let low = prompt("Enter side length: ");
let side = "";
let finalBox = "";
if (!isNaN(Number(low)) && low != "" && low != null) {
  console.log("Input side length: " + low);
  console.log(" ");
  console.log("Shape:");
  for (let row = 0; row < low; row++) {
    // Each row should increase by one star untill reaching final row
    for (let col = 0; col <= row; col++) {
      // Number of rows indicates numbers of stars (row 5 has five stars)
      side += "*";
    }
    finalBox += side + "\n";

    side = "";
  }

  console.log(finalBox);
} else {
  console.log("Please reload and actually type in numbers.");
}
