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
		case 'STORE_UPDATE_COLLECTION_EXERCISE':
			return assign({}, state, {
				items: state.items.map(function (collectionExercise) {

					if (collectionExercise.id === action.collectionExercise.id) {
						return assign({}, collectionExercise, action.collectionExercise);
					}

					return collectionExercise;
				})
			});
		case 'STORE_ADD_COLLECTION_EXERCISE':
			var newItems = state.items.map(function (collectionExercise) {
				return collectionExercise;
			});

			newItems.push(action.collectionExercise);

			return assign({}, state, {
				items: newItems
			});
		default:
			return assign({}, state);
	}

}

module.exports = collectionExercisesReducer;