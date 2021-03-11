let contents = null;
function readSingleFile(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];

  if (f) {
    var r = new FileReader();
    r.onload = function (e) {
      contents = e.target.result; // store contents
    };
    console.log(r.readAsText(f));
  } else {
    alert("Failed to load file");
  }
}
/*
 * Checks all words with identical phoneme
 * takes original word and phoneme sequence as arguments
 */
function identical(origin, word) {
  let ident = document.getElementById("ident"); // HTML
  let all = contents.split("\n"); // Put everything in an array
  ident.innerHTML = "Identical: ";
  // Check all words for identical phoneme as long as it's not the original word
  for (let i = 0; i < all.length; i++) {
    if (all[i].includes(word) && !all[i].includes(origin)) {
      let identical = all[i].split("  ");
      ident.append(identical[0] + " "); // Print to html
    }
  }
}
/*
 * Check for words that have one phoneme difference
 * takes phoneme sequence as argument
 */
function replacePhen(word) {
  let repl = document.getElementById("replace");
  let all = contents.split("\n");
  let phon = word.split(" "); // Phonene sequence divided into array
  phon.shift(); // the array seems to start of with two empty elements, might look into why later
  phon.shift();
  repl.innerHTML = "Replace phoneme: ";

  for (let i = 0; i < all.length; i++) {
    // Each phoneme sequence gets divided into arrays
    let count = 0;
    let line = all[i].split("  ");
    if (line.length >= 2) {
      // Make sure array is at least 2 elements
      let phoneme = line[1].split(" ");
      for (let j = 0; j < phon.length; j++) {
        // Check if phoneme is identical as original
        if (phon[j] == phoneme[j]) {
          count++; // increase counter
        }
      }
      if (count == phon.length - 1 && phoneme.length == phon.length) {
        // if the amount of identical phonemes is one less than original and the phoneme sequence is same length
        repl.append(line[0] + " "); // add the word to html
      }
    }
  }
}

/*
 * Checks all words one phoneme extra
 * takes phoneme sequence as argument
 */
function oneExtra(word) {
  let add = document.getElementById("add");
  let all = contents.split("\n");
  let phon = word.split(" "); // Phonene sequence divided into array

  phon.shift(); // the array seems to start of with two empty elements, might look into why later
  phon.shift();
  console.log(phon.length);
  console.log(phon);
  add.innerHTML = "add phoneme: ";

  for (let i = 0; i < all.length; i++) {
    // Each phoneme sequence gets divided into arrays
    let count = 0;
    let line = all[i].split("  ");
    if (line.length >= 2) {
      // Make sure array is at least 2 elements
      let phoneme = line[1].split(" ");
      for (let j = 0; j < phoneme.length; j++) {
        // Check if phoneme is identical as original
        if (phon[j] == phoneme[j]) {
          count++; // increase counter
        }
      }
      if (phon[phon.length - 1].includes(phoneme[phoneme.length - 2])) {
        // check if the last phoneme contains same letter (doesn't need to be identical)
        count++;
      }
      if (count == phon.length && phoneme.length == phon.length + 1) {
        // if the amount of identical phonemes and the phoneme sequence is one longer
        add.append(line[0] + " "); // add the word to html
        console.log(line[1]);
      }
    }
  }
}

/*
 * Find the word in the dictionary
 */
function getWord() {
  let para = document.getElementById("res"); // get the paragraph
  let pronounce = document.getElementById("pronounce");
  para.innerHTML = "Word: "; // Clear the paragraph
  pronounce.innerHTML = "Pronounciation: ";
  let all = contents.split("\n"); // put contents in array
  let word = document.getElementById("word").value;
  if (word.length > 0) {
    let result = "";
    let item;
    let ident = "";
    word = word.toUpperCase(); // Upper case
    for (let i = 0; i < all.length; i++) {
      // go through each element in the array
      item = all[i];
      if (item.substring(0, word.length) == word) {
        // if the word is found in the array
        // We know that the words are in the beginning of each line
        // So check from the beginning based on the words length
        // String.includes() could also have been used.
        ident = item.substring(word.length);
        identical(word, ident);
        replacePhen(ident);
        oneExtra(ident);
        break;
      }
    }
    para.append(word);
    if (ident == "") {
      pronounce.append("Nothing found");
    } else {
      pronounce.append(ident);
    }
  } else {
    para.append("Type in word please");
  }
}
document
  .getElementById("fileinput")
  .addEventListener("change", readSingleFile, false);
document.getElementById("wordRead").addEventListener("click", getWord, false);
document.getElementById("word").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWord();
  }
});
