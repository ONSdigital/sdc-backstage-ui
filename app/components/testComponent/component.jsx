var myComponentTemplate = require('./component.html.jsx');

var MyComponent = React.createClass({

    getInitialState: function () {
        return {
            testProp: 'Something to insert here'
        };
    },

    render: function () {
        return myComponentTemplate.bind(this)();
    }

});

module.exports = MyComponent;