const express = require('express');
const {create} = require('express-handlebars');
const app = express();
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/auth');
require('dotenv').config();

const connectDB = require('./database/connection');
const { urlencoded } = require('express');
const port = process.env.PORT || 3001;


// setting handlebar engine template
const hbs = create({ 
    extname: ".hbs",
    partialsDir: ["views/components"],
 });
 app.engine(".hbs", hbs.engine);
 app.set("view engine", ".hbs");
 app.set("views", "./views");

 
 // middleware
 app.use(express.urlencoded({ extended: true })); // Habilita los formularios para leer req.body
 
 
 // routes
 app.use("/", homeRouter);
 app.use("/login", loginRouter);

 //  static files
 app.use(express.static(`./public`));
 
// DB and server connection 
const startConnection = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=> console.log('server running at port: ' + port));

    } catch (error) {
        console.log(error);
    };
};

startConnection();