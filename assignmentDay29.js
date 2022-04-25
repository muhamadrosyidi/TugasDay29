var express = require('express');
var app = express();

let data = {}
let port = 4000;

// controllers --> sistem melakukan handling logika
var controllers = require('./controller/controller.js')
var olah = controllers.tiga('/api/todos/:id',data);

// model --> sistem melakukan penyimpanan
var model = require('./model/model.js')
var store = model.satu('/api/todos',data, port);

// view --> user melihat hasil respon dari server
var view = require('./view/view.js')
var input = view.dua('/api/todos',data, port);












