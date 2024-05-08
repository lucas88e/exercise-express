const express = require('express')
const morgan = require("morgan")

const app = express()
const port = 3000

// Import Morgan for request logging here
app.use(morgan("dev"))

// Import movies and genres from data.js here

// Configure the middleware for morgan here

// Import router modules for each entity here
const routerGenres = require("./routes/genres");
const routerMovies = require("./routes/movies")
const routerTesting = require("./routes/testing")



app.get('/api/health', routerTesting)

app.get('/api/movies', routerMovies)

app.get('/api/genres', routerGenres)

app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
)

