var Redux = require('react-redux'),

	CollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),

	collectionExerciseMappings = require('../mappings/collectionExercises.jsx'),

	CollectionExerciseDetailsComponent = require('../components/CollectionExerciseDetailsPage/CollectionExerciseDetailsPage.comp.jsx');

function mapStateToProps (state, ownProps) {

	var collectionExercise =_.find(state.collectionExercises.items, function (collectionExercise) {
		return collectionExercise.id === state.ui.collectionExercise.details.id;
	});

	return {
		details: collectionExercise,
		survey: collectionExerciseMappings.getSurvey(state.surveys.items, collectionExercise).survey
	};

}

function mapDispatchToProps (dispatch, ownProps) {
	return {
		onStateChangeClicked: function (state) {
			dispatch(CollectionExercisesActions.CHANGE_COLLECTION_EXERCISE_STATE(
				ownProps.params.id, state
			))
			.then(function (data) {
				dispatch(CollectionExercisesActions.STORE_UPDATE(data));
			});
		},

		onSamplesUploadClicked: function () {
			dispatch(CollectionExercisesActions.UPLOAD_COLLECTION_EXERCISE_SAMPLE({
				collectionExerciseId: ownProps.params.id,
				formData: new FormData($('#samples-form')[0])
			}))
			.then(function (data) {
				dispatch(CollectionExercisesActions.STORE_UPDATE(data));
			});

		}
	};
}

var CollectionExerciseDetailsContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);

module.exports = CollectionExerciseDetailsContainer;
