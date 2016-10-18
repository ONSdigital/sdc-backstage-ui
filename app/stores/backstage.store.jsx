var Redux = require('redux'),

	browserHistory = require('react-router').browserHistory,

	routerReducer = require('react-router-redux').routerReducer,
	routerMiddleware = require('react-router-redux').routerMiddleware,

	thunkMiddleware = require('redux-thunk').default,
	createLogger = require('redux-logger'),

	/**
	 * Reducers
	 */
	uiReducer = require('../reducers/ui.jsx'),
	surveysReducer = require('../reducers/surveys.jsx'),
	userReducer = require('../reducers/user.jsx'),
	collectionExercisesReducer = require('../reducers/collectionExercises.jsx');

/**
 * Application store
 */
var appStore = Redux.createStore(
	Redux.combineReducers({

		/**
		 * Data collections
		 */
		collectionExercises: collectionExercisesReducer,

		//respondants: <respondants>,

		//reportingUnits: <reportingUnitsReducer>,

		surveys: surveysReducer,


		// Temp =========
		user: userReducer,

		/*something: function (state, action) {
		 return {
		 comment: 'Just another function'
		 };
		 },*/
		// End temp =====


		ui: uiReducer,

		routing: routerReducer
	}),

	Redux.applyMiddleware(
		thunkMiddleware,
		createLogger(),
		routerMiddleware(browserHistory)
	)
);

module.exports = appStore;