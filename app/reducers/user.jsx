var assign = require('object-assign');

var userReducer = function (state, action) {

	var initialState = function () {
		return {};
	};

	state = state || initialState();

	switch(action.type) {
		case 'TEST_ACTION':
			return assign({}, state, {
				id: 123,
				someProperty: 'Some Value'
			});
		default:
			return assign({}, state);
	}

};

module.exports = userReducer;