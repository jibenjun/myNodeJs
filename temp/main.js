var fs = require('fs');
var data = fs.readFileSync('temp/input.txt');
console.log(data.toString());
console.log("程序结束!");


/* 
console.log("异步调用！");
var fs = require('fs');
fs.readFile("temp/input.txt", function (err, data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
})
console.log("程序结束！"); */