var Redux = require('react-redux'),

	CollectionExerciseListComponent = require('../components/CollectionExerciseList/CollectionExerciseList.comp.jsx');

function mapStateToProps (state) {
	return {
		allCollectionExercises: state.collectionExercises.items
	};
}

function mapDispatchToProps (state) {
	return {

	};
}

var CollectionExerciseListContainer = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseListComponent);

module.exports = CollectionExerciseListContainer;