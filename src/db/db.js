const mongoose = require('mongoose')
const DB_URI = 'mongodb+srv://fjuribe14:fjuribe14@userkepper-p7sy0.mongodb.net/mongo-crud?retryWrites=true&w=majority' 

mongoose.connect(DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err))