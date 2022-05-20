const dayjs = require('dayjs');
const {supermemo} = require('supermemo');

let item = {
    front: "what is a programmer",
    back: "Someone who turns caffeine into code",
    interval: 0,
    repetition: 0,
    efactor: 2.5
}
console.log(item);

item = supermemo(item, 1);
console.log(item);

item = supermemo(item, 4);
console.log(item);

item = supermemo(item, 5);
console.log(item);