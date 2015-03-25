var http = require('http'); 

DEFAULT_PORT = 1337;

var PORT = process.env.PORT || DEFAULT_PORT;
 
http.createServer(function (req, res) {  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
<<<<<<< HEAD
}).listen(PORT, '0.0.0.0');
=======
}).listen(5000, '0.0.0.0');
>>>>>>> 759674a2926d3fbbd21a1ebcce3165b85bb97444
