const fs = require("fs");
const { resolve } = require("path");
let ssList = []

const readFolderfiles = () => {
    return new Promise((resolve, reject) => {
        fs.readdir("./assets/img/", (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            files.forEach(file => {
                ssList.push(file);
            })
            resolve(ssList);
        })
    })
}

module.exports = readFolderfiles;