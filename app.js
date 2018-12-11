const app = require('express')();

app.get('/', function (req, res) {
    res.send('Express server')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
