// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
const mathlib = require('./mathlib')();
console.log(mathlib.random(1,35));
// creating a server using http module:
const server = http.createServer( (request, response) => {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        fs.readFile('404.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end('File not found!!!'); // finished!
        });
        //response.writeHead(404);
        //response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
