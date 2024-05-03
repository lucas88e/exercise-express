const express = require('express')

// Import Morgan for request logging here

// Import movies and genres from data.js here

const app = express()
const port = 3000

// Configure the middleware for morgan here

// Import router modules for each entity here

app.get('/api/health', (req, res) => {
	res.status(200).json({ success: true, data: 'Server is running' })
})

app.get('/api/movies', (req, res) => {
	res.json(movies)
})

app.get('/api/genres', (req, res) => {
	res.json(genres)
})

app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
)
