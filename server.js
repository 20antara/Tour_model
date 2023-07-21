const mongoose = require('mongoose');
const app = require('./app');

const DB_URL = 'mongodb+srv://royantara2000:<password>@cluster0.ybxg6p7.mongodb.net/?retryWrites=true&w=majority'
const DB_PASSWORD= '8876antara';

const DB = DB_URL.replace('<password>', DB_PASSWORD);
const PORT=8082;
mongoose.connect(DB).then(() => {
    console.log("DB connected succesfully");
}).catch((error) => {
    console.log("DB error", error);
})
app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`)
 });