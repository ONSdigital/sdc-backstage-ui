var assign = require('object-assign');

var uiReducer = function (state, action) {

	var initialState = function () {
			return {
				collectionExercise: {
					add: {
						selectedReportingPeriodType: ''
					},
					details: {},
					list: {
						activeFilter: ''
					}
				}
			};
		},
		newState;

	state = state || initialState();

	newState = assign({}, state);

	switch (action.type) {
		case 'ADD_COLLECTION_EXERCISE_CHANGE_PERIOD':
			newState.collectionExercise.add.selectedReportingPeriodType = action.periodType;
			return newState;
		case 'RESET_ADD_COLLECTION_EXERCISE':
			newState.collectionExercise.add.selectedReportingPeriodType = '';
			return newState;
		case 'RESET_COLLECTION_EXERCISE_DETAILS':
			newState.collectionExercise.details = {};
			return newState;
		case 'FILTER_COLLECTION_EXERCISE':
			newState.collectionExercise.list.activeFilter = action.status;
			return newState;
		case 'REQUEST_COLLECTION_EXERCISE_DETAILS':
			newState.collectionExercise.details.id = action.collectionExercise.id;
			return newState;
		case 'UI_COLLECTION_EXERCISE_DETAILS':
			newState.collectionExercise.details.id = action.id;
			return newState;
		default:
			return newState;
	}
};

module.exports = uiReducer;