var express = require('express');
    app = express();
    
app.use(express.static('dist'));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/dist/indesx.html');
});

app.listen(8081, function(){
    console.log("server running on localhost:8081");
});