const moment = require('moment');
const User = require('../models/user.js');

module.exports = {

    index : (req, res) => {
        return res.render('index');
    },

    show : (req, res) => {
        User.find({}, (err, users) => {
            if(err){
                console.log(`Error ${err} occured.`);
                res.render('quotes', {users:[]});
                //quotes.show(request, response, 'quotes', {users:[]});
            }
            else res.render('quotes', {users:users, moment: moment});
        })
    },

    create : (req, res) => {

        let user = new User({name: req.body.name, quote: req.body.quote});

        user.save( err => {
            // if there is an error console.log that something went wrong!
            if(err) {
              //console.log(err);
              for(let key in err.errors) req.flash('test', err.errors[key].message);
              res.redirect('/');
            } else { // else console.log that we did well and then redirect to the root route
              console.log('successfully added the quote!');
              res.redirect('/quotes');
            }
        })
    }

}
