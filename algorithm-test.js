const dayjs = require('dayjs');
const {supermemo} = require('supermemo');

let item = {
    interval: 0,
    repetition: 0,
    efactor: 2.5
}
console.log(item);

item = supermemo(item, 5);
console.log(item);

item = supermemo(item, 4);
console.log(item);