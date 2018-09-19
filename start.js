require('babel-register')({
    presets: [ 'env' ]
})
// const app = require('./app.js');
// const http = require('http');
//
// module.exports = app
module.exports = require('./app.js')
