var Redux = require('react-redux'),

	locationActions = require('../actions/Location.actions.jsx'),

	CollectionExerciseListComponent = require('../components/CollectionExerciseList/CollectionExerciseList.comp.jsx');

function mapStateToProps (state) {
	return {
		allCollectionExercises: state.collectionExercises.items
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onAddCollectionExerciseClick: function () {
			locationActions.change('/collection-exercises/create');
		}
	};
}

var CollectionExerciseListContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseListComponent);

module.exports = CollectionExerciseListContainer;