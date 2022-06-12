const http = require('http')
const fs = require('fs')
const path = require('path')

var server=http.createServer((request,response) =>{
    fs.readFile(
        path.join(__dirname,"index.html"),
        (err,data) =>{
            if(err) throw err;
            response.end(data)
        }
        )
});

server.listen(7000)