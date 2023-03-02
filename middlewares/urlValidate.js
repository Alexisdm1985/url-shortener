const {URL} = require('url'); // node native

const urlValidate = (req, res, next) => {
    try {
        const {origin: inputUrl} = req.body;
        const urlFrontend = new URL(inputUrl);
        if (urlFrontend.origin !== 'null') {
            return next();
        }else{
            throw new Error("url no valida");
        };
    } catch (error) {
        // console.log("error", error);
        return res.send("url no valida")
    }

};

module.exports = urlValidate;