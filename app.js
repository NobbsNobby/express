const app = require('express')();

app.get('/', function (req, res) {
    res.send('Express server v 2')
});

app.get("/about", function(request, response){

    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){

    response.send("<h1>Контакты</h1>");
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
