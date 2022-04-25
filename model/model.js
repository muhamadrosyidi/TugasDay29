function satu (link, datum, port){
    var express = require('express');
    var app = express();

    var lis = require('../view/view.js');

    app.use(express.json());

    app.post(link, function (req, res){
        const text = req.body.text;
        const id = Math.floor((Math.random()*100)+1);
        
        if (text == ''){
            res.status(400).send('Error: text is empty');
        } else {
            datum[id] = {
                todo: text,
                done: false
        };
        res.status(200).send("todo added");
        }
    })

    lis.dua(link, datum, port)
}  
module.exports = { satu } ;

