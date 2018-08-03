var a = +process.argv[2];
var b = +process.argv[3];
var random1 = Math.random(); // 0.44 * (0 - 100) + 100 // 0.44 * -100 + 10
var random = Math.floor(random1 * (a - b) + b);

console.log(random);