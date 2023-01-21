const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./public/src/utils/geocode')
const forecast = require('./public/src/utils/forecast')



const app = express();


const publicDirectoryPath = path.join(__dirname, './public');
const HelpPage = path.join(__dirname, './public/Help');
const AboutPage = path.join(__dirname, './public/About');
const viewsPath = path.join(__dirname, '/template/views')
const partialPath = path.join(__dirname, './template/partials')


//Setup handlebars engine and views location

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

console.log('Server running on port 3000');
//Setup 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Anish '
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Anish'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        Comapant: 'Afoundation'
    })
})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query);
    res.send({
        products: []
    })
})

app.use(express.static(publicDirectoryPath))
app.use(express.static(HelpPage))
app.use(express.static(AboutPage))
// app.com

app.get('', (req, res) => {
    res.send('')
})
app.get('/help', (req, res) => {
    app.use(express.static(HelpPage))
})
app.get('/about', (req, res) => {
    app.use(express.static(AboutPage))
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })

    }

    geocode(req.query.address,(error,data)=>{
        if(error)
        {
            return console.log(error);
        }
        forecast(data.req.query.address,data.latitude,data.longitude,(error,forecastData)=>{
            if(error)
            {
                return console.log(error);
            }
            res.send({
                
                Weather:data.description,
                forecastData,
                address:req.query.address
            })
        })
    })

})


app.listen(3000);