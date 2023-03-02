const express = require('express');
const {create} = require('express-handlebars');
const app = express();
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/auth');

const port = 3000;

// setting handlebar engine template
const hbs = create({ 
    extname: ".hbs",
    partialsDir: ["views/components"],
 });
 app.engine(".hbs", hbs.engine);
 app.set("view engine", ".hbs");
 app.set("views", "./views");
 
//  routes
 app.use("/", homeRouter);
 app.use("/login", loginRouter);
 
 
      
// middleware
app.use(express.static(`${__dirname}/public`));

app.listen(port, ()=> console.log('server runnint at port: ' + port));