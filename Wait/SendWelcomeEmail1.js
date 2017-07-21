var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendWelcomeEmail1',
    handle: function(done) {
        console.log('Sending welcome email 1 to: ' + this.email);
        setTimeout(function(){
            console.log('- email 1 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
