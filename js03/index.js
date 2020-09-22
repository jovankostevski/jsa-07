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

// fileWrite('text.txt', 'Hello World!')
//     .then(() => {
//         console.log('Promise done!');
//     })
//     .catch(err => {
//         console.error(err);
// });

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

// fileAppend('text.txt', 'Hello Again!')
//     .then(() => {
//         console.log('Promise 2 done!');
//     })
//     .catch(err => {
//         console.error(err);
// });

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

// fileRead('text.txt')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
// });

fileWrite('text.txt', 'Promise chaining...')
    .then(() => {
        return fileAppend('text.txt', 'Chain 1');
    })
    .then(() => {
        return fileRead('text.txt');
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
});

const fileWork = async () => {
    try {
        await fileWrite('text.txt', 'Async/await chaining...');
        await fileAppend('text.txt', 'Append...');
        let data = await fileRead('text.txt');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

fileWork();

const getConfig = () => {
    let data = fs.readFileSync('config.json', 'utf8');
    return JSON.parse(data);
}

console.log(getConfig().db.dbname);
console.log(getConfig().mail.key);
console.log(getConfig().server.port);