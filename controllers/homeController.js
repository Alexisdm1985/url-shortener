const Url = require('../models/Url');
const {nanoid} = require('nanoid');

const getUrls = async (req, res) => {
    
    try {
        const url = await Url.find().lean();

        res.render("home", {urls: url});
        
    } catch (error) {
        console.log(error);
        res.send('Errorrrrrr algo fallo desde DELURL CONTROLLER');
    };  
};

const addUrl = async (req, res) => {
    
    const {origin} = req.body;
    const shortUrl = nanoid(6);
    try {

        const urlModel = new Url({origin, shortUrl});
        await urlModel.save();
        res.redirect("/")
        
    } catch (error) {
        console.log(error)
        res.send('Errorrrrrr algo fallo man');
    }
};

const delUrl = async (req,res) => {
    const urlID = req.params.id
    try {
    
        // const deletedUrl = await Url.findByIdAndDelete(urlID);
        await Url.findOneAndRemove(urlID);
        res.redirect("/");
        
    } catch (error) {
        console.log(error)
        res.send('Errorrrrrr algo fallo desde DELURL CONTROLLER');
    }
    
};

const getUrl = async (req, res) => {
    
    // get the url and render
    const {id} = req.params;
    try {
        const url = await Url.findById(id).lean();
        res.render("home", { url });
    } catch (error) {
        console.log(error)
        res.send('Error desde getUrl controller')
    }


};

const updateUrl = async (req, res) => {
    const {id} = req.params;
    const {origin} = req.body
    try {
        
        // res.redirect("/");
        await Url.findOneAndUpdate(id, {origin});
        res.redirect("/" )
        // res.render("home", { url });
    } catch (error) {
        console.log(error)
        res.send('Error desde getUrl controller')
    }
};

const toShortUrl = async (req, res) => {
    const {shortUrl} = req.params;
    
    try {
        const {origin} = await Url.findOne({shortUrl});
        res.redirect(origin);
    
    } catch (error) {
        console.log(error)
        res.send('Error desde getUrl controller')
    }
;}


module.exports = {
    getUrls,
    addUrl,
    delUrl,
    getUrl,
    updateUrl,
    toShortUrl
};