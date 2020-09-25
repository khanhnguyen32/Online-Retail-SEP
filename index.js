let express = require('express');
let app = express();

//Set Public Static Folder
app.use(express.static(__dirname + '/public'));

//Set Server Port & Start Server
app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'), () =>{
    console.log(`Server is rungning at port ${app.get('port')}`);
})