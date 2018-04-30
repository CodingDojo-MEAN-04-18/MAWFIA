

module.exports = (request, response) => {
    const fs = require('fs');
    const http = require('http');
    const css_file = /.css$/
    const path = request.url.toLowerCase().split('/');
    //console.log(`first element is ${path[path.length-1]} ${path.length}`);
    //console.log('client request URL: ', request.url);

    if(request.url === '/'){
        fs.readFile('./index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if( css_file.test(request.url) ){
        fs.readFile(`.${request.url}`, 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if( ['.png','.jpg','.jpeg','.gif'].find( (p) => p === path[path.length-1].substring(path[path.length-1].length-4) ) ){
        fs.readFile(`.${request.url}`, (errors, contents) => {
            response.writeHead(200, {'Content-Type': `images/${path[path.length-1].substring(path[path.length-1].length-4)}`});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        fs.readFile('404.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
        //response.writeHead(404);
        //response.end('File not found!!!');
    }
};
