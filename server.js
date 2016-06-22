// Brings in the express module
var express = require('express');
// Sets the app equal to the express module
var app = express();
// Sets port to run app on
  // Uppercase vars in JS mean that the value shouldn't change
  // process.env.PORT is for heroku, 3000 is for local
var PORT = process.env.PORT || 3000;

// Brings in the middleware module
var middleware = require('./middleware.js');

app.use(middleware.logger);

// Creates the About page
  // When you want to add route level middleware, all you have
  // to do is reference it in the 2nd argument, and then have 
  // the route's callback function in the 3rd argument
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

// Takes and uses the folder that you want to use for your views
  // __dirname grabs the current directory name
  // Adding '/public' tells it to access the 'public' folder
app.use(express.static(__dirname + '/public'));

// Specifies which port to listen on
// In this case localhost:3000
  // Second (optional) argument is a function that specifies
  // something to do once the server starts
app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});