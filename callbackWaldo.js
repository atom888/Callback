// Lighthouse Labs - Callback Exercise //

// Exercise was broken into two sections
// To test first part - comment out forEach section
// To test second part - comment out finding index section


// Callback Exercise - finding index of Waldo //


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found((i + 1));   // execute callback
    }
  }
}

function actionWhenFound(num) {
  console.log("Found Waldo at index " + num);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Callback Exercise using forEach //

function actionWhenFound(num, index) {
  if (num === "Waldo") {
    console.log("Found Waldo at index " + (index + 1));
  }
}

var findWaldo = ["Alice", "Bob", "Waldo", "Winston"];

findWaldo.forEach(actionWhenFound);
