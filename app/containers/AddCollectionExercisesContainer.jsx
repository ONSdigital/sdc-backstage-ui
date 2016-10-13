var Redux = require('react-redux'),
	Link = require('react-router').Link,

    AddCollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
    AddCollectionExercisesComponent = require('../components/AddCollectionExercises/AddCollectionExercises.comp.jsx');


var mapStateToProps  = function (state) {
    console.log('App State: ', state);

    return {
        testProp: 'Test Property'
    };
};

var mapDispatchToProps = function (dispatch) {
    return {
        onSaveClicked: function () {
            console.log('on save clicked');

			console.log(Link);

            dispatch(AddCollectionExercisesActions.ADD());
        }
    }
};


var AddCollectionExercisesContainer = Redux.connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCollectionExercisesComponent);


module.exports = AddCollectionExercisesContainer;