var fs = require('fs');

module.exports = function(app) {
  console.log(__dirname);

  app.get('/', function(req, res) {
    fs.createReadStream('index.html').pipe(res);
  });

}