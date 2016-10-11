var AddCollectionExercisesComponent = React.createClass({

    getInitialState: function () {
        return {
            testProp: 'Something'
        };
    },

    render: function () {
        return require('./AddCollectionExercises.html.jsx').bind(this)();
    }

});

module.exports = AddCollectionExercisesComponent;