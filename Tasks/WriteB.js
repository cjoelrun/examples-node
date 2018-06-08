var fs = require('fs');
var {Task} = require("zenaton");

module.exports = Task("WriteB", function(done) {
  fs.appendFile("/tmp/test", "B", function(err) {
      if(err) {
          done(err);
      }
      done(null, "WriteB");
  });
});
