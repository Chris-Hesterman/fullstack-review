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
          console.log(err);
          return;
        }
        console.log(docs, ' added to database');
      });
      // This function should save a repo or repos to
      // the MongoDB
    };

    module.exports.save = save;
  })
  .catch((err) => {
    throw err;
  });
