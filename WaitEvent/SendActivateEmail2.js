var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendActivateEmail2',
    handle: function(done) {
        console.log('Sending activate email 2 to: ' + this.data);
        setTimeout(function(){
            console.log('- email 2 sent');
            done();
        }, 1 * 1000 );

    }
});
