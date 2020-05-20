const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database');
const github = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  github
    .getReposByUsername(req.body.username)
    .then((response) => {
      let documents = [];

      for (let repo of response.data) {
        let document = {};
        document.name = repo.name;
        document.repoId = repo.id;
        document.username = repo.owner.login;
        document.url = repo.html_url;
        document.forks = repo.forks_count;
        documents.push(document);
      }
      db.save(documents);
      res.send(documents);
    })
    .then(() => {
      res.end();
    })
    .catch((err) => {
      throw err;
    });
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
