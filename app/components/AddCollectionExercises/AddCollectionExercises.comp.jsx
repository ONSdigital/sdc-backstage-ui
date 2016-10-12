var AddCollectionExercisesComponent = React.createClass({

    getInitialState: function () {
        return {
            testProp: 'Something'
        };
    },

    render: function () {
        return require('./AddCollectionExercises.html.jsx').bind(this)();
    },

});

AddCollectionExercisesComponent.propTypes = {
    onSaveClicked: React.PropTypes.func.isRequired
};

module.exports = AddCollectionExercisesComponent;