function tiga (link, datum){
    var express = require('express');
    var app = express();

    var lis = require('../listener/listener.js');

    app.use(express.json());
    
    app.put(link, function(req, res){
        const id = req.params.id;
        const text = req.body.text
        const done = req.body.done
    
        if (id in datum){
            if(req.body.text == undefined || req.body.text == ""){
                datum[id].done = req.body.done;
            } else {
                datum[id]={
                    text: text,
                    done: done
                };
                res.send('Data has been updated');
                return
            }
        } else {
            res.status(400).send('Error');
        }
    })
    
    app.delete(link, function(req,res){
        const id = req.params.id
        if(id in datum){
            delete datum[id];
            res.send('Data has been deleted');
        } else {
            res.status(400).send('Error');
        }
    })
    
    lis.hear(port);
}

module.exports = { tiga };