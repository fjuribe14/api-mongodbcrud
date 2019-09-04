const express = require('express')
const path = require('path')

// init
const app = express()
require('./db/db')

// settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(express.urlencoded({extended: false}))

// statics
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(require('./routes/home'))

// listen
async function server(){
    const port = app.get('port')
    app.listen(port)
    console.log('server on port', port)
}server()