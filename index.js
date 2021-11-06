
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

app.get('/projects', (req, res) => {
    //res.sendFile(__dirname + '/views/newmain.html')
  res.render('projects')
})

app.get('/about', (req, res) => {
    //res.render('./public/projects/know-each-other/adrian-webpage')
    res.sendFile(__dirname + '/public/projects/know-each-other/adrian-webpage.html')
})

app.get('/resume', (req, res) => {
    res.render('resume')
})



app.get('/reg-exp-tester', (req, res) => {
    //res.render('./public/projects/know-each-other/adrian-webpage')
    res.sendFile(__dirname + '/public/projects/reg-exp-tester/regexp.html')
})
app.get('/know-each-other', (req, res) => {
    //res.render('./public/projects/know-each-other/adrian-webpage')
    res.sendFile(__dirname + '/public/projects/know-each-other/adrian-webpage.html')
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