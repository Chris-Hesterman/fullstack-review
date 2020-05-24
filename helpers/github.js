const axios = require('axios');
// const config = require('../config.js');

let getReposByUsername = (username) => {
  console.log(username);

  const url = `https://api.github.com/users/${username}/repos`;
  let options = {
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${process.env.TOKEN}`
    }
  };

  return axios.get(url, options);
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
};

module.exports.getReposByUsername = getReposByUsername;
