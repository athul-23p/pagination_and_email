const mongoose = require('mongoose');

const local = '"mongodb://127.0.0.1:27017/pagination"';
const user = 'user23';
const pswd = "9b5uxrgR8M6AkgV4";
const connectionStr = `mongodb+srv://${user}:${pswd}@cluster0.5nsf7.mongodb.net/Pagination?retryWrites=true&w=majority`
module.exports = () => { 
    return mongoose.connect(connectionStr);
};
