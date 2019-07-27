let hour = new Date().getHours();
let greeting;
if (hour >= 7 && hour <= 12) {
  greeting = "\n Good morning";
} else if (hour >= 13 && hour <= 222) {
  greeting = "\n Good afternoon";
} else {
  greeting = "\n Good night";
}
console.log(`${greeting}, its ${hour} hours`);
console.log("\n");
console.log("Number PI with 6 decimals:", Number(Math.PI.toFixed(6)));
console.log("\n");
for (let index = 0; index <= 22; index++) {
  convertir(index);
  function convertir(index) {
    let num = index;
    let dec = num;
    let hex = num.toString(16);
    let oct = num.toString(8);
    let bin = num.toString(2);
    console.log(`${dec} dec  =${hex}hex= ${oct}oct =${bin} bin`);
  }
}
console.log("\n");
for (let index = 1; index <= 21; index++) {
  convertir(index);
  function convertir(index) {
    if ((index <= 10 && index % 2 === 1) || index === 21) {
      let dec = index;
      let hex = index.toString(16);
      let oct = index.toString(8);
      let bin = index.toString(2);
      console.log(`${dec} dec  =${hex}hex= ${oct}oct =${bin} bin`);
    } else {
    }
  }
}
console.log("\n");
console.log("Hi in Chinese is written as:", "\u55e8\uff0c\u4f60\u597d\u5417");
console.log("\n");
console.log("The program has finished");

