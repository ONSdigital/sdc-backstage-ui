var Provider = require('react-redux').Provider,
    Redux = require('redux'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    Link = require('react-router').Link,
    browserHistory = require('react-router').browserHistory,

    thunkMiddleware = require('redux-thunk').default,
    createLogger = require('redux-logger'),

    assign = require('object-assign'),

    syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,
    routerReducer = require('react-router-redux').routerReducer,

    render = require('react-dom').render,

    AddCollectionExercisesContainer = require('./containers/AddCollectionExercisesContainer.jsx'),
    PageTitleComponent = require('./components/shared/PageTitle/PageTitle.comp.jsx'),

    surveyActions = require('./actions/Surveys.actions.jsx');


var MainLayout = React.createClass({

    render: function () {
        return (
            <section>
                <PageTitleComponent title="ONS Surveys Manager" />
                <section className="container">
                    {this.props.children}
                </section>
            </section>
        );
    }

});

var NoMatchLayout = React.createClass({

    render: function () {
        return (
            <section>
                <PageTitleComponent title="Oops.." />
                <section className="container">
                    <h2>Sorry,</h2>
                    <h3>We were unable to find the page you were looking for.</h3>
                </section>
            </section>
        );
    }

});

var pageState = {

        tempHub: function () {
            return (
                <div>
                    <h2>Start Page (temp)</h2>

                    <h3>Collection Exercise</h3>
                    <p><Link className="btn btn-info btn-large" to={'/create'}>Create</Link></p>
                    <p><Link className="btn btn-info btn-large" to={'/publish'}>Publish</Link></p>
                    <p><Link className="btn btn-info btn-large" to={'/list'}>List</Link></p>
                </div>
            );
        },

        collectionExercise: {

            create: function () {
                return (
                    <AddCollectionExercisesContainer />
                )
            },

            publish: function () {
                return (
                    <div>
                        <h2>Collection Exercise</h2>
                        <ul className="details-list">
                            <li className="row details-list-item">
                                <label className="col-xs-4 col-sm-3 title">Title:</label>
                                <strong className="col-xs-8 col-sm-9 detail">Survey Name</strong>
                            </li>
                            <li className="row details-list-item">
                                <label className="col-xs-4 col-sm-3 title">To start on:</label>
                                <strong className="col-xs-8 col-sm-9 detail">1st December 2016</strong>
                            </li>
                            <li className="row details-list-item">
                                <label className="col-xs-4 col-sm-3 title">To end on:</label>
                                <strong className="col-xs-8 col-sm-9 detail">1st February 2017</strong>
                            </li>
                            <li className="row details-list-item">
                                <label className="col-xs-4 col-sm-3 title">Created by:</label>
                                <strong className="col-xs-8 col-sm-9 detail">John Smith</strong>
                            </li>
                        </ul>
                        <div className="actions">
                            <button className="btn btn-primary">Publish collection exercise</button>
                        </div>
                    </div>
                );
            },

            list: function () {
                return (
                    <div>
                        <h2>Collection Exercise list</h2>
                        <ul className="row">
                            <li className="col-xs-6">
                                <strong>Survey</strong>
                            </li>
                            <li className="col-xs-6">
                                <strong>Period</strong>
                            </li>
                        </ul>
                        <ul className="row">
                            <li className="col-xs-6">
                                <strong>Survey name</strong>
                            </li>
                            <li className="col-xs-6">
                                <strong>...</strong>
                            </li>
                        </ul>
                        <ul className="row">
                            <li className="col-xs-6">
                                <strong>Survey name</strong>
                            </li>
                            <li className="col-xs-6">
                                <strong>...</strong>
                            </li>
                        </ul>
                        <ul className="row">
                            <li className="col-xs-6">
                                <strong>Survey name</strong>
                            </li>
                            <li className="col-xs-6">
                                <strong>...</strong>
                            </li>
                        </ul>
                    </div>
                );
            }

        },

        default: function () {
            return pageState.tempHub();
        }
    };

var userReducer = function (state, action) {

    var initialState = function () {
            return {};
        },
        newState = [];

    state = state || initialState();

    console.log('State: ', state, 'Action: ', action);

    switch(action.type) {
        case 'TEST_ACTION':
            return assign({}, state, {
                id: 123,
                someProperty: 'Some Value'
            });
    }

    return assign({}, state);

};

var surveysReducer = function (state, action) {

    var initialState = function () {
            return {
                isFecthing: false,
                response: {}
            };
        },
        newState = [];

    /**
     * Create initial user object
     */
    if (state === undefined) {
        state = [];
    }
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
            return state;
    }

};


var loggerMiddleware = createLogger();


/**
 * Application store
 */
var appStore = Redux.createStore(
    Redux.combineReducers({

        /**
         * Data collections
         */
        //collectionExercises: <collectionExercisesReducer>,

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


        routing: routerReducer
    }),

    Redux.applyMiddleware(
        thunkMiddleware
    )
);

appStore.dispatch(surveyActions.FETCH()).then(function (res) {
    console.log('Response from ajax request', arguments);
});



var history = syncHistoryWithStore(browserHistory, appStore);

/**
 * Boot
 */
jQuery(document).ready(function () {

    render(
        <Provider store={appStore}>
            <Router history={history}>
                <Route component={MainLayout}>
                    <Route path="/" component={pageState.default} />
                    <Route path="create" component={pageState.collectionExercise.create}/>
                    <Route path="publish" component={pageState.collectionExercise.publish}/>
                    <Route path="list" component={pageState.collectionExercise.list}/>
                </Route>
                <Route path="*" component={NoMatchLayout}/>
            </Router>
        </Provider>,

        document.getElementById('app'));

});