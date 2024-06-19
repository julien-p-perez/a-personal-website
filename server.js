const express = require('express'); 
const app = express(); 
const port = 8008; 
const path = require('path'); 
const tailwindConfig = require('./tailwind.config');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static('assets'));
app.use('/styles', express.static('styles'))


app.get('/', (req, res) => {
    const data = {
        title: "My website",
        message: ""
    }
    res.render('index', {data});
});

  app.get('/about', function(req, res) {
    const data  = {
        name: "Ju", 
        about: "College Student trying to learn how to code"
    }
    res.render('about', {data});

  })

  app.get('/contact', (req, res) => {
    const data = {
        email: "", 
        ln: "", 
        youtube:"", 
    }

    res.render('contact', {data})
  })

  app.listen(port, () => console.log(`App listening on port ${port}`));