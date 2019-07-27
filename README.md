# miradaxModulo1
test miradax modulo1
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


daniel@DESKTOP-GTVGOF8 MINGW32 /c/miradaxnodejs6/ejemplosM1/test1/mooc_node-mod1_types_sentences-master
$ npm run checks

> mooc_node-mod1_types_sentences@ checks C:\miradaxnodejs6\ejemplosM1\test1\mooc_node-mod1_types_sentences-master
> node tests/launcher.js


Test: 1: Checking that the assignment file exists...
        Score: 0.5/0.5
        Remarks: The directory 'C:\miradaxnodejs6\ejemplosM1\test1\mooc_node-mod1_types_sentences-master' has been found

Test: 2: Running 'mooc_node-mod1_types_sentences.js'
        Score: 0.5/0.5
        Remarks: The file has been successfully run

Test: 3: Checking the output length
        Score: 1.5/1.5
        Remarks: The output length is OK

 Good morning, its 12 hours

Test: 4: Checking the initial greeting
        Score: 1.5/1.5
        Remarks: The initial greeting has been found

Test: 5: Checking that the PI value is printed
        Score: 1.25/1.25
        Remarks: 6 decimals of the PI value have been found

Test: 6: Checking the equivalence table
        Score: 0/1.25
        Remarks: The element 24 has not been found.
                        Expected: /.*?24.*?18.*?30.*?11000.*?/
                        Received: 23 dec  =17hex= 27oct =10111 bin

Test: 7: Checking the equivalence table for odd numbers between 10 and 20
        Score: 0/1.25
        Remarks: The element 0 has not been found.
                        Expected: /.+?1.+?1.+?1.+?1.+?/
                        Received:

Test: 8: Checking that unicode characters are printed correctly
        Score: 1.25/1.25
        Remarks: 'hello' in chinese has been found

Test: 9: Checking that the farewell sentence is printed
        Score: 1.5/1.5
        Remarks: The farewell sentence has been found
Final Result: 8/10.5
daniel@DESKTOP-GTVGOF8 MINGW32 /c/miradaxnodejs6/ejemplosM1/test1/mooc_node-mod1_types_sentences-master
$
