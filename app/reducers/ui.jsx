var assign = require('object-assign');

var uiReducer = function (state, action) {

	var initialState = function () {
			return {
				collectionExercise: {
					add: {
						selectedReportingPeriodType: ''
					},
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
		case 'FILTER_COLLECTION_EXERCISE':
			newState.collectionExercise.list.activeFilter = action.status;
			return newState;
		default:
			return newState;
	}
};

module.exports = uiReducer;