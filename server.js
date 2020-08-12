const express = require("express");

//Router import here
const CarsRouter = require('./cars/carsRouter')

//Global Middleware here
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2> Node db 2 Project is UP! </h2>`)
})

server.use('/api/cars', CarsRouter)

module.exports = server;
