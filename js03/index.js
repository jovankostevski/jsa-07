const fs = require('fs');

// fs.writeFile('data.txt', 'TEST TEST TEST', err => {
//     if(err){
//         console.error(err);
//     }
//     console.log('Write done!');

//     fs.appendFile('data.txt', 'BLAH BLAH BLAH', err => {
//         if(err) {
//             console.error(err);
//         }
//         console.log('Done!');

//         fs.readFile('data.txt', 'utf8', (err, data) => {
//             if(err) {
//                 console.error(err);
//             }
//             console.log(data);
//         });
//     });
// });

const fileWrite = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, err => {
            if(err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

fileWrite('text.txt', 'Hello World!')
    .then(() => {
        console.log('Promise done!');
    })
    .catch(err => {
        console.error(err);
});

const fileAppend = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(file, content, err => {
            if(err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

fileAppend('text.txt', 'Hello Again!')
    .then(() => {
        console.log('Promise 2 done!');
    })
    .catch(err => {
        console.error(err);
});

const fileRead = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
};

fileRead('text.txt')
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
});