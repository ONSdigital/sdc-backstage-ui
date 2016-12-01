var push = require('react-router-redux').push,
	appStore = null;

module.exports = {

	setStore: function (store) {
		appStore = store;
	},

	change: function (location) {
		appStore.dispatch(push(location));
	}

};
