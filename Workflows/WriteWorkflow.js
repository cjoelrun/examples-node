var {Workflow} = require("zenaton");

var WriteA = require("../Tasks/WriteA");
var WriteB = require("../Tasks/WriteB");

module.exports = Workflow("WriteWorkflow", function() {
    new WriteA().execute()
    new WriteB().execute()
});
