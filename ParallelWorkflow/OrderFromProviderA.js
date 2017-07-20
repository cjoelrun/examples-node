var Zenaton = require('zenaton-javascript');

var orderFromProviderA = new Zenaton.Task({
    name: 'OrderFromProviderA',
    handle: function(done) {
        console.log('Order "' + this.item + '" from Provider A');
        done();

    }
});

module.exports = orderFromProviderA;
