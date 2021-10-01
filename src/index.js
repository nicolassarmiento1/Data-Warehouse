require('dotenv').config();

const app = require('./server');
require('./database');

console.log(process.env.TESTING);

app.listen(app.get('port'),function(req,res){
    console.log('Server on port ', app.get('port'));
});