const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true
});

promise
  .then((db) => {
    console.log('mongo connection successful');

    let repoSchema = mongoose.Schema({
      name: String,
      repoId: { type: Number, unique: true },
      username: String,
      url: String,
      forks: Number
    });

    let Repo = db.model('Repo', repoSchema);

    let save = (documents) => {
      console.log('save documents');
      Repo.collection.insertMany(documents, (err, docs) => {
        if (err) {
          console.log('Error: ', err);
          return;
        }
        console.log(docs, ' added to database');
      });
      // This function should save a repo or repos to
      // the MongoDB
    };

    let getRepos = () => {
      return Repo.find().sort({ forks: -1 }).limit(25);
    };

    let getTotalRepos = () => {
      return Repo.count({}, (err, count) => {
        if (err) {
          console.log(err);
          return;
        }
        return count;
      });
    };

    module.exports.save = save;
    module.exports.getTotalRepos = getTotalRepos;
    module.exports.getRepos = getRepos;
  })
  .catch((err) => {
    throw err;
  });
