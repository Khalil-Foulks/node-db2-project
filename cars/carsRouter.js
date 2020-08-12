const express = require("express")

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get('/', (req, res) => {
    const { sortby = 'car_id', sortdir = 'desc' } = req.query;

    db('cars')
    .orderBy(sortby, sortdir)
    .then(cars => {
        res.status(200).json({ cars })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error:error.message })
    })
});

router.get('/:id', (req, res) => {
    const carsId = req.params.id;

    db('cars')
    .where({ car_id: carsId})
    .then(cars => {
        res.status(200).json({ cars })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error:error.message })
    })
});

router.post('/', (req, res) => {
    const body =  req.body

    db('cars')
    .insert(body).returning('id')
    .then(ids => {
        res.status(201).json({ inserted: ids })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error:error.message })
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const carsId = req.params.id;

    db('cars')
    .where({ car_id: carsId })
    .update(changes)
    .then(count => {
        if(count){
            res.status(200).json({ message: 'update succesful', data:changes })
        } else {
            res.status(404).json({ message: ' Id not found.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error:error.message })
    })
});

router.delete('/:id', (req, res) => {
    const carsId = req.params.id;

    db('cars')
    .where({ car_id: carsId })
    .del()
    .then(count => {
        if(count){
            res.status(204).end()
        } else {
            res.status(404).json({ message: ' Id not found.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error:error.message })
    })
});

module.exports = router;