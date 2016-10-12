var Redux = require('react-redux'),

    AddCollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
    AddCollectionExercisesComponent = require('../components/AddCollectionExercises/AddCollectionExercises.comp.jsx');

function mapStateToProps (state) {
    console.log(state);

    return {
        testProp: 'Something different'
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onSaveClicked: function () {
            console.log('on save clicked');

            dispatch(AddCollectionExercisesActions.ADD());
        }
    }
}

var AddCollectionExercisesContainer = Redux.connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCollectionExercisesComponent);

module.exports = AddCollectionExercisesContainer;