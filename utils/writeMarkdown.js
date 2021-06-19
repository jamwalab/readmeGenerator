const fs = require("fs");

const writeFile = writeFileData => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${writeFileData.fileName}.md`, writeFileData.markdownText, err => {
            //if error reject promise and send error to catch function
            if (err) {
                reject(err);
                //return so it doesn't accidently run resolve
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            })
        })
    });
};

module.exports = writeFile;