// By Adrian Perez


const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

//static files or try app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

// webpage routes in another js file//
require('./routes')(app)

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;

/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
*/

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((req, res) => {
    res.status(500)
    res.render('500')
})


//the port
app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))
    