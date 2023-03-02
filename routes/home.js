const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        // simulacion db
        const url = [
            {origin: "www.google.com/bluuweb1", shortURL: "rutacortaxd"},
            {origin: "www.google.com/bluuweb2", shortURL: "rutacortaxd"},
            {origin: "www.google.com/bluuweb3", shortURL: "rutacortaxd"},
        ];

        res.render("home", {urls: url});
    })

module.exports = router;