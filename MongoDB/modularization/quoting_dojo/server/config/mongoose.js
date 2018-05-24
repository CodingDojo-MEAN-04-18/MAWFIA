
const mongoose = require('mongoose');
//const fs = require('fs');
//const path = require('path');
mongoose.connect('mongodb://localhost/quoting_dojo');

/*var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    console.log(models_path + '/' + file);
    //require(models_path + '/' + file);
   }
})*/

module.exports = mongoose;
