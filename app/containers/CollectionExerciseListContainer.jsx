var Redux = require('react-redux'),

	collectionExerciseMappings = require('../mappings/collectionExercises.jsx'),

	locationActions = require('../actions/Location.actions.jsx'),
	CollectionExerciseListComponent = require('../components/CollectionExerciseListPage/CollectionExerciseListPage.comp.jsx');

function mapStateToProps (state) {
	return {
		allCollectionExercises: state.collectionExercises.items.map(function (collectionExerciseItem) {

			/**
			 * Add survey to collection exercise view
			 */
			return collectionExerciseMappings.getSurvey(state.surveys.items, collectionExerciseItem);
		}),
		activeFilter: state.ui.collectionExercise.list.activeFilter
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onAddCollectionExerciseClick: function () {
			locationActions.change('/collection-exercises/create');
		},

		onCollectionFilterClick: function (status, e) {
			locationActions.change('/collection-exercises/' + status);
		}
	};
}

var CollectionExerciseListContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseListComponent);

module.exports = CollectionExerciseListContainer;