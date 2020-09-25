let express = require('express');
let app = express();

//Set Public Static Folder
app.use(express.static(__dirname + '/public'));

//Use View Engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + "/view/layouts",
    partialsDir: __dirname + '/views/partials/'
});

//Set Server Port & Start Server
app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'), () =>{
    console.log(`Server is rungning at port ${app.get('port')}`);
})