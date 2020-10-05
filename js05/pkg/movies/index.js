const fs = require('fs');
const dataSource = 'data.json';

const Read = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataSource, 'utf8', (err, data) => {
            if(err) {
                return reject(err);
            }
            return resolve(JSON.parse(data));
        });
    });
};

const Write = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dataSource, JSON.stringify(data), err => {
            if(err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

module.exports = {
    Read,
    Write
};