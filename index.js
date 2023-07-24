// Modules and Globals
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const methodOverride = require('method-override')
// Load environment variables from .env file
dotenv.config()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('home')
})
app.use('/places', require('./controllers/places'))

// Error 404 page
app.get('*', (req, res) => {
  res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)