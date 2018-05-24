const express = require('express');
const app = express();
const server = app.listen(5000);
const io = require('socket.io')(server);
const session = require('express-session');
const bodyParser = require('body-parser');
let user = {};
let users = [];

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'victoriassecrect', resave: true, saveUninitialized: true}));

class User{
    constructor(username, id){
        this.username = username;
        this.id = id;
    }
}

io.on('connection', socket => { //2
  user.username != null ? socket.emit('chat', {user: user, users: users}) : socket.emit('init', {msg:`You are now connected.`});


  socket.on('got_a_new_user', name => {
      user = new User(name, socket.id);
      users.push(user);
      io.emit('add_user', users);
  });

  socket.on('disconnect', (data) => {
      //console.log(`user ${socket.id} ${user.id}`);
      //if(socket.id !== user.id) users.pop(user) io.emit('remove_user', users) : null;
  })
});

app.get('/', (request, response) => {

    request.session.username == null ?
        response.render('index', {host: response.req.headers.host}) :
        response.render('chatroom', {username: request.session.username})
})

app.post('/', (request, response) => {
    request.session.username = user.username;
    response.render('chatroom', {username: request.session.username, users: users});
})
