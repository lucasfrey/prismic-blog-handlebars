
/**
 * Module dependencies.
 */
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
const PrismicDOM = require('prismic-dom');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var path = require('path');
var exphbs = require('express-handlebars');

module.exports = function() {
  var app = express();

  /* rendering engine, with change extension to .hbs */
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: require("./includes/handlebars.js").helpers,
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  }));

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
  app.use(favicon("public/images/favicon.ico"));
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(errorHandler());

  return app;
}();
