function dua (link, datum, port){
    var express = require('express');
    var app = express();

    var lis = require('../listener/listener.js');

    app.use(express.json());
    
    app.get(link, function (req, res){
        res.send(datum);
    })
    console.log ('module view is running');

    lis.hear(port);
}
module.exports = { dua };
