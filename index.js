const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/dist/assets`))


app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});