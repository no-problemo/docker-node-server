var http = require('http'); 

DEFAULT_PORT = 1337;

var PORT = process.env.PORT || DEFAULT_PORT;
 
http.createServer(function (req, res) {  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(PORT, '0.0.0.0');