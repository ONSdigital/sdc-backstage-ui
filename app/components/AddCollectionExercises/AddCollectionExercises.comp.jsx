var AddCollectionExercisesComponent = React.createClass({

    render: function () {
        return require('./AddCollectionExercises.html.jsx').bind(this)();
    },

});


AddCollectionExercisesComponent.propTypes = {
    onSaveClicked: React.PropTypes.func.isRequired
};


module.exports = AddCollectionExercisesComponent;