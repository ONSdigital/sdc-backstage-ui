var assign = require('object-assign');

var surveysReducer = function (state, action) {

	var initialState = function () {
			return {
				isFetching: false,
				items: []
			};
		};

	state = state || initialState();


	switch (action.type) {
		case 'REQUEST_SURVEYS':
			return assign({}, state, {
				isFetching: true
			});
		case 'RECEIVE_SURVEYS':
			return assign({}, state, {
				isFetching: false,
				items: action.surveys
			});
		default:
			return assign({}, state);
	}

};

module.exports = surveysReducer;