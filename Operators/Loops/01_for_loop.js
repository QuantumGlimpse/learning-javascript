// For Loops

for (let i = 1; i <= 10; i++) {
  console.log("Increasing = " + i);
}

for (let j = 10; j >= 1; j--) {
  console.log("Decreasing = " + j);
}

for (let k = 2; k <= 10; k += 2) {
  console.log("Evens = " + k);
}


// Do-While Loop

let j = 0;

do {
  console.log("Multiples of 5 = " + j);
  j += 5;
} while (j <= 100);


// While Loop

let k = 1;

while (k <= 50) {

  if (k === 25) {
    k += 2;        // Move to next odd number
    continue;
  }

  console.log("Odd numbers = " + k);

  if (k === 37) {
    break;
  }

  k += 2;
}