var RESET_ADD_COLLECTION_EXERCISE = 'RESET_ADD_COLLECTION_EXERCISE',
	RESET_COLLECTION_EXERCISE_DETAILS = 'RESET_COLLECTION_EXERCISE_DETAILS',
	SHOW_COLLECTION_EXERCISE_DETAILS = 'UI_COLLECTION_EXERCISE_DETAILS';

function resetAddCollectionExercise () {

	return {
		type: RESET_ADD_COLLECTION_EXERCISE
	};

}

function resetCollectionExerciseDetails () {

	return {
		type: RESET_COLLECTION_EXERCISE_DETAILS
	};

}

function showCollectionExercise (collectionExerciseId) {

	return {
		type: SHOW_COLLECTION_EXERCISE_DETAILS,
		id: collectionExerciseId
	};

}

module.exports = {

	RESET_ADD_COLLECTION_EXERCISE: resetAddCollectionExercise,
	RESET_COLLECTION_EXERCISE_DETAILS: resetCollectionExerciseDetails,
	SHOW_COLLECTION_EXERCISE_DETAILS: showCollectionExercise

};