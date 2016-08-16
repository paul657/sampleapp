var express = require ('express');
var app = express();

app.get('/api', function(req, res){
  console.log('somebody visited /api');
  res.json({"success": "tere tulemast!"});
});

app.listen(3000, function(){
  console.log('app started on port 3000');
});
