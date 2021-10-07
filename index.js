/* 
Name: Adrian Perez
Descr: using node, express with handlebars, this is going to be hosted in azure 

*/

/**
 * thknk of the the express frame work as a light waieght  middle-ware
 * from the fornt end (html.css, JS) adn the back end (node.js); it just so happen that this 
 * middle-ware  is JS to contral what is  going on.
 * 
 * https://www.youtube.com/watch?v=JlgKybraoy4
 * 
 * https://expressjs.com/en/starter/installing.html
 * 
 * https://youtu.be/mW2NyglYpm8 
 * 
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

app.get('/', (req, res) => res.render('homepage'))

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