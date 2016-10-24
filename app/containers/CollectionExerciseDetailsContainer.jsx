var Redux = require('react-redux'),

	CollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
	uiActions = require('../actions/UI.actions.jsx'),

	appStore = require('../stores/backstage.store.jsx'),

	collectionExerciseMappings = require('../mappings/collectionExercises.jsx'),

	CollectionExerciseDetailsComponent = require('../components/CollectionExerciseDetails/CollectionExerciseDetails.comp.jsx');

/**
 * Hack - stop multiple calls from reload component state
 */
var currentId = -1;

function mapStateToProps (state, ownProps) {

	if (currentId != ownProps.params.id) {
		appStore.dispatch(uiActions.RESET_COLLECTION_EXERCISE_DETAILS());
		appStore.dispatch(CollectionExercisesActions.FETCH(ownProps.params.id));
		currentId = ownProps.params.id;
	}

	return {
		details: state.ui.collectionExercise.details,
		survey: collectionExerciseMappings.getSurvey(state.surveys.items, state.ui.collectionExercise.details).survey
	};
}

function mapDispatchToProps (dispatch, ownProps) {
	return {
		onPublishedClicked: function () {
			dispatch(CollectionExercisesActions.PUBLISH_COLLECTION_EXERCISE(ownProps.params.id));
		},

		onSamplesUploadClicked: function () {
			dispatch(CollectionExercisesActions.UPLOAD_COLLECTION_EXERCISE_SAMPLE({
				collectionExerciseId: ownProps.params.id,
				formData: new FormData($('#samples-form')[0])
			}));
		}
	};
}

var CollectionExerciseDetailsContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);

module.exports = CollectionExerciseDetailsContainer;
