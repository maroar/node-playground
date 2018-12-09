var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + "/api/views");

// Routes
var usuarioRoutes = require("./api/routes/UsuarioRoutes"); 
usuarioRoutes(app); 

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: `A URL ${req.originalUrl} não foi encontrada.`})
});

console.log("RESTful API server started on: " + port);
