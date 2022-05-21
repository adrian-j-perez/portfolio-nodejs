module.exports = function (app) {

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
        // res.sendFile(__dirname + '/public/projects/know-each-other/adrian-webpage.html')
        res.render("about")
    })

    app.get('/resume', (req, res) => {
        res.render('resume')
    })

    app.get('/reg-exp-tester', (req, res) => {
        //res.render('./public/projects/know-each-other/adrian-webpage')
        res.sendFile(__dirname + '/public/projects/reg-exp-tester/regexp.html')
    })

    app.get('/dice-roller', (req, res) => {
        res.sendFile(__dirname + '/public/projects/dice-roller/index.html')
    })

}