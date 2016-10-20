var Redux = require('react-redux'),

	CollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
	uiActions = require('../actions/UI.actions.jsx'),

	appStore = require('../stores/backstage.store.jsx'),

	CollectionExerciseDetailsComponent = require('../components/CollectionExerciseDetails/CollectionExerciseDetails.comp.jsx');

/**
 * Hack - stop multiple calls from reload component state
 */
var currentIndex = -1;

function mapStateToProps (state, ownProps) {

	if (currentIndex != ownProps.params.id) {
		appStore.dispatch(uiActions.RESET_COLLECTION_EXERCISE_DETAILS());
		appStore.dispatch(CollectionExercisesActions.FETCH(ownProps.params.id));
		currentIndex = ownProps.params.id;
	}

	return {
		details: state.ui.collectionExercise.details
	};
}

function mapDispatchToProps () {
	return {

	};
}

var CollectionExerciseDetailsContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);

module.exports = CollectionExerciseDetailsContainer;
