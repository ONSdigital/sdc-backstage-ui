var Redux = require('react-redux'),

    AddCollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
    AddCollectionExercisesComponent = require('../components/AddCollectionExercises/AddCollectionExercises.comp.jsx');


var mapStateToProps  = function (state) {
    console.log('App State: ', state);

    return {
        testProp: 'Something different'
    };
};

var mapDispatchToProps = function (dispatch) {
    return {
        onSaveClicked: function () {
            console.log('on save clicked');

            dispatch(AddCollectionExercisesActions.ADD());
        }
    }
};


var AddCollectionExercisesContainer = Redux.connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCollectionExercisesComponent);


module.exports = AddCollectionExercisesContainer;