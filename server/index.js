const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
var bodyParser = require('body-parser');

app.use(express.static('public'));

// calling body-parser to handle the Request Object from POST requests
// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/spotify/', function(req, res) {
  console.log(req.body);

  res.send(req.body);
});

app.listen(port, () => console.log(`Spotify app listening on port ${port}!`));
