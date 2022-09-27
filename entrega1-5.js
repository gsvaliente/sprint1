'use strict';
////NIVEL 1
//EJERCICIO 1
const fs = require('fs');
const zlib = require('zlib');

//WRITE IN A NEW FILE
const write = (mensaje) => {
  fs.writeFileSync('writeMe.txt', mensaje);
};
// write('Hola que tal!');

//EJERCICIO 2
//READ THE FILE
const print = (dir) => {
  const read = fs.readFileSync(`${dir}`, 'utf-8');
  console.log(read);
};
// print('writeMe.txt');

//EJERCICIO 3
//COMPRESS FILE
const compress = (file) => {
  const gzip = zlib.createGzip();
  const inp = fs.createReadStream(file);
  const out = fs.createWriteStream(file + '.gz');
  inp.pipe(gzip).pipe(out);
};
// compress('writeMe.txt');

////NIVEL 2
const repeatMessage = (i) => {
  setTimeout(() => {
    console.log('Hola que tal');
    repeatMessage(++i);
  }, 1000);
};
// repeatMessage(0);