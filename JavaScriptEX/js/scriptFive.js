let upper = prompt("Enter side length: ");
let side = "";
let finalBox = "";
if (!isNaN(Number(upper)) && upper != "" && upper != null) {
  console.log("Input side length: " + upper);
  console.log(" ");
  console.log("Shape:");
  // Each row will have the same amount of characters, and we move from top to bottom
  for (let row = upper; row > 0; row--) {
    for (let space = upper - row; space > 0; space--) {
      // Counting down, spaces will increase
      side += " ";
    }
    for (let star = row; star > 0; star--) {
      // and stars will decrease
      side += "*";
    }
    finalBox += side + "\n";
    side = "";
  }

  console.log(finalBox);
} else {
  console.log("Please reload and actually type in numbers.");
}
