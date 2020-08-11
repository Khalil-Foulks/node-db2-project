const express = require("express")

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get('/', (req, res) => {
    const { limit = 100, sortby = 'id', sortdir = 'desc' } = req.query;

    db('cars')
    .then(cars => {
        res.status(200).json({ cars })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error:error.message })
    })
});

router.get('/:id', (req, res) => {
    const accountsId = req.params.id;

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
    const accountsId = req.params.id;

});

router.delete('/:id', (req, res) => {
    const accountsId = req.params.id;

});

module.exports = router;