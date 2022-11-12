const fs = require("fs");
const csv = requre('csvtojson');
const { Parser } = requre('json2csv');

(async () => {

    const accounts = await csv().fromFile("cryptopass.csv");
    console.log(accounts)

})