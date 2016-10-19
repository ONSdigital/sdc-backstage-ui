var assign = require('object-assign');

function collectionExercisesReducer (state, action) {

	var initialState = function () {
		return {
			isFetching: false,
			items: []
		};
	};

	state = state || initialState();

	switch (action.type) {
		case 'RECEIVE_ALL_COLLECTION_EXERCISES':
			return assign({}, state, {
				isFetching: false,
				items: action.collectionExercises
			});
		default:
			return assign({}, state);
	}

}

module.exports = collectionExercisesReducer;