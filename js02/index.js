// let a = 'Pero'
// console.log(a)

// var b = 'Janko'
// console.log(b)

// // console.log(c)
// // var c = 'Stanko'

// // console.log(d)
// // let d = 'Petar'

// //var е ограничен од опсегот на функцијата
// //let е ограничен од опсегот на блокот

// function hello(){
//     console.log('Hello')
// }

// const zdravo = () => {  //zdravo bez const e promenliva
//     console.log('zdravo!')
// }

// const x = function() {  // vo x se zapisuva rezultatot
//     console.log('hello X')
// }

// // od levata strana constantite imaat vrednost funkcija

// const func1 = (i, j, cb) => {
//     cb(i + j);
// }

// func1(2, 3, d => console.log(d))

// //prviot ona sto sakame da se izvrsi, a vtoriot parametar za kolku vreme da se izvrsi nesto
// const to = () => console.log('timed out!')
// setTimeout(to, 5000); //ona e 5 sec

// setTimeout(()=>{console.log('10 second timeout!')}, 10000)
// //prviot parametar-funkcijata e CALLBACK FUNKCIJA!

// setInterval(()=>console.log('tic toc'), 1000)

// function c2f(C) {
//     return(C*9/5+32);
// };
// console.log(c2f(5));
// function f2c(F) {
//     return((F-32)*5/9);
// };
// console.log(f2c(41));



//funkcija koja sobira dva broja pogolemi ili ednakvi na 0
const sobiranje = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a >= 0 && b >= 0) {
            return resolve(a + b);
        } else {
            return reject('Numbers are less than 0.');
        }
    });
};

// sobiranje(2, -7)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

const af = async () => {   //drug nacin za kodot pogore
    try {
        let res = await sobiranje(3, -9);
        console.log(res);
    } catch(err) {
        console.error(err);
    }
};

af();

// console.log("before timeout");

// setTimeout(() => {
//     console.log("timed out!");
// }, 1000);

// console.log("after timeout");




















































