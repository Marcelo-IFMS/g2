// Use "type: commonjs" in package.json to use CommonJS modules
 const express = require('express');
 const app = express();
//const app = require('./config/server')
//const port = 3000;
 const consign = require('consign');
consign()
  .include('./route')
  .into(app);

 
module.exports = app;