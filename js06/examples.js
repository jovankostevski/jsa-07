const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

let iminja = ['Pero', 'Janko', 'Petko', 'Stanko'];

let c = iminja.map((ime, index) => {  //map e immutable function
    return `${ime} ${ime}vski`;
});

// console.log(c);

let f = iminja.filter((ime, index) => {
    return ime[0] == 'P';
});

// console.log(f);

// iminja.forEach((ime, index) => {
//     console.log(`[${index}] ${ime}`);
// });

let r = iminja.reduce((prev, curr) => {
    return `${prev} ${curr}`;
});

// console.log(r);

let broevi = [4, 2, 1, 3, 5];

let res = broevi.reduce((prev, curr) => {
    return prev + curr;
});

let s = broevi.sort((a, b) => { //MUTABLE
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(s);