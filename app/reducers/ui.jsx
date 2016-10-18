var assign = require('object-assign');

var uiReducer = function (state, action) {

	var initialState = function () {
			return {
				collectionExercise: {
					add: {
						selectedReportingPeriodType: ''
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
		default:
			return newState;
	}
};

module.exports = uiReducer;