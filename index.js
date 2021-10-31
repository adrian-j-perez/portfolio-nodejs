/* 
Name: Adrian Perez
Descr: using node, express with handlebars, this is going to be hosted in azure 

*/


const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

//static files or try app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;


// webpage routes//

app.get('/', (req, res) => {
      //res.sendFile(__dirname + '/views/newmain.html')
    res.render('homepage')
})



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