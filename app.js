const express = require("express");
const app = express();

app.use(
  express.static(__dirname + "/public", {
    extensions: ['html', 'htm']
  })
);

app.get("/", function(req, res) {
  res.send("Express server");
});
app.get("/contact", function(request, response) {
  response.send("<h1>Контакты</h1>");
});
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
