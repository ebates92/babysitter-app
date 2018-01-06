const express = require('express')
const app = express();
const fs = require('fs');

app.get('/api', function(request, response){
    fs.readFile('scripts/test-data.json','utf8', function(err, data){
        response.send(data);
    })
});

app.listen(8000);