// 阻塞代码实例
var fs = require("fs");
var data = fs.readFileSync('index.txt');
console.log(data.toString());
console.log("程序执行结束!");
// 非阻塞代码实例
// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");