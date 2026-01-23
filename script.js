const numbers = [1, 2, 3, 4, 5, 6];

// Display original array
document.getElementById("numbers").textContent = numbers.join(", ");

// filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
document.getElementById("evenNumbers").textContent = evenNumbers.join(", ");

// map()
const doubledNumbers = numbers.map(num => num * 2);
document.getElementById("mappedNumbers").textContent = doubledNumbers.join(", ");

// reduce()
const totalSum = numbers.reduce((total, num) => total + num, 0);
document.getElementById("totalSum").textContent = totalSum;
