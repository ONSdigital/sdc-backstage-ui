var ReactRedux = require('react-redux'),
    Provider = ReactRedux.Provider,
    Redux = require('redux'),

    AppComponent = require('./components/App/App.comp.jsx');


var userReducer = function (state, action) {

    state = state || {};

    switch(action.type) {
        case 'TEST_ACTION':
            return {
                id: 123,
                someProperty: 'Some Value'
            }
    }

    return state;

};


var appReducer = Redux.combineReducers({
    user: userReducer
});


/**
 * Application store
 */
var appStore = Redux.createStore(appReducer);


/**
 * Boot
 */
jQuery(document).ready(function () {

    ReactDOM.render(
        <Provider store={appStore}>
            <AppComponent page="default" />
        </Provider>,

        document.getElementById('app'));

});