var Redux = require('react-redux'),

	locationActions = require('../actions/Location.actions.jsx'),
	CollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
	CollectionExerciseListComponent = require('../components/CollectionExerciseList/CollectionExerciseList.comp.jsx');

function mapStateToProps (state) {
	return {
		allCollectionExercises: state.collectionExercises.items,
		activeFilter: state.ui.collectionExercise.list.activeFilter
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onAddCollectionExerciseClick: function () {
			locationActions.change('/collection-exercises/create');
		},

		onCollectionFilterClick: function (status, e) {
			dispatch(CollectionExercisesActions.UI_FILTER(status));
		}
	};
}

var CollectionExerciseListContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseListComponent);

module.exports = CollectionExerciseListContainer;