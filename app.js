var http = require('http');
const fs = require('fs');
const port = 3000;


function reqFile(name, req, res) {
    fs.readFile(req.url.slice(1), (err, data) => {
        if (err) throw err;
        try { res.setHeader('Content-Type', 'text/' + name);    
        } catch (error) { return res.statusCode = 400;}

        res.statusCode = 200;
        res.write(data);
        res.end();
    });
}


const server = http.createServer(function(req, res){
    if (req.url != '/favicon.ico' ) {
        if (req.url.endsWith('.css')) {
            reqFile("css", req, res);
        } 
        else if (req.url.endsWith('.js') && req.url != "/app.js") {
            reqFile("javascript", req, res);
        } 
        else if (req.url.endsWith('.png')) {
            reqFile("png", req, res);
        } 
        else {
            fs.readFile('index.html',function (err, data){
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                console.log(port);
                res.end();      
                return;      
            });            
        }
    } 
})

server.listen(port, function(error) {
        if (error) {
            console.log("wrong !", error);    
        } else {
            console.log("lisstener ! " + port);       
            console.log(`http://127.0.0.1:${port}/app.js`);       
        }
    }
);