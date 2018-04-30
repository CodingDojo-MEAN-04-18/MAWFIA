// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const static_contents = require('./static');
// creating a server using http module:
const server = http.createServer( (request, response) => {
    // see what URL the clients are requesting:
    static_contents(request, response);
    // this is how we do routing:
});
// tell your server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running in localhost at port 8000");
