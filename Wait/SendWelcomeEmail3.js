var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendWelcomeEmail3',
    handle: function(done) {
        console.log('Sending welcome email 3 to: ' + this.data);
        setTimeout(function(){
            console.log('- email 3 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
