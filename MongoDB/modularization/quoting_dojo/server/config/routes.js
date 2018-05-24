const users = require('../controllers/users.js');

module.exports = function(app){

    app.get('/', (request, response) => {
        users.index(request, response);
    })
       // all other routes
   app.get('/quotes', (request, response) => {
       users.show(request, response);
   })

   app.post('/quotes', (request, response) => {
       users.create(request, response);
   })
}
