var fs = require('fs');
var {Task} = require("zenaton");

module.exports = Task("WriteA", function(done) {
  fs.appendFile("/tmp/test", "A", function(err) {
      if(err) {
          done(err);
      }
      done(null, "WriteA");
  });
});
