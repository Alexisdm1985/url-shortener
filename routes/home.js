const express = require('express');
const router = express.Router();
const { getUrls, addUrl, delUrl, getUrl, updateUrl, toShortUrl } = require('../controllers/homeController');
const urlValidate = require('../middlewares/urlValidate');

router.route('/')
    .get(getUrls)
    .post(
        urlValidate, //middleware
        addUrl
        );

router.route("/editar/:id")
        .get(getUrl)
        .post(
            urlValidate,
            updateUrl
            );

router.route("/eliminar/:id")
    .get(
        delUrl
        ); 

router.route("/goTo/:shortUrl")
        .get(toShortUrl)
module.exports = router;