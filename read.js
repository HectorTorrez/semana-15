const fs = require('fs');
const fileName = 'file.txt';
const data = fs.readFileSync(fileName);

fs.readFile(fileName, function callback(){
  setTimeout(function function2(){
    console.log(data.toString())
  },200);
});

console.log('Hola');

setTimeout(function timeout(){
  console.log('Buenas Tardes');
},4000);