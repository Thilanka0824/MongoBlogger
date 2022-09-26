/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const alphabet = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 5 },
  { f: 6 },
  { g: 7 },
  { h: 8 },
  { i: 9 },
  { j: 10 },
  { k: 11 },
  { l: 12 },
  { m: 13 },
  { n: 14 },
  { o: 15 },
  { p: 16 },
  { q: 17 },
  { r: 18 },
  { s: 19 },
  { t: 20 },
  { u: 21 },
  { v: 22 },
  { w: 23 },
  { x: 24 },
  { y: 25 },
  { z: 26 }
];

function rot13(message){
    splitMessage = message.split("")
    console.log(splitMessage)

    const letterToCipher = null
    
}
console.log("hello")

messageStr = "test"


let counter = 0

for (let i = 0; i < ; i++) {
    counter++

    if (counter >= 26) {
        console.log(counter);
        counter = 0
        console.log(counter);
    }
}
console.log("final: " + counter)