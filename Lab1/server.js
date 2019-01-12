

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    
    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */

    /* lets try to read the html page found */
    fileSystem.readFile(fileName , callback);

    function callback(err, data) {
if (err){

    response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index.html'});
}
     else if (fileName=="todo"){ //i didn't wanna change the var name

            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(data.toString());
            
        }
        else if (fileName=="read-todo"){ //i didn't wanna change the var name

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data.toString());
        
    }
        else{

            response.writeHead(200, {'Content-Type': 'text/html'});
           response.write(data.toString());
        }     
        
        /* the response is complete */
        response.end();
    }

   

}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');
