const express = require('express');
const app = express();

//app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', socket => { //2

  socket.emit('greeting', { msg: `Greetings, from server Node, brought to you by Sockets! -Server visit: ${++counter}` }); //3
  socket.on('thankyou', data => { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });

});

app.get('/', (request, response) => {

    response.render('index');
})
