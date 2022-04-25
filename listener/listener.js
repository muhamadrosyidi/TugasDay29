function hear (port) {
    var express = require('express');
    var app = express();

    app.use(express.json());

    app.listen(port, ()=> {
        console.log('Running a server...');
    });
}
module.exports = { hear };