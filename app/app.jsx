var ReactRedux = require('react-redux'),
    Provider = ReactRedux.Provider,
    Redux = require('redux'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    Link = require('react-router').Link,
    browserHistory = require('react-router').browserHistory,

    syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,
    routerReducer = require('react-router-redux').routerReducer,

    render = require('react-dom').render,

    AddCollectionExercisesContainer = require('./containers/AddCollectionExercisesContainer.jsx'),
    PageTitleComponent = require('./components/shared/PageTitle/PageTitle.comp.jsx');


var pageState = {

        tempHub: function () {
            return (
                <section>
                    <PageTitleComponent title="ONS Surveys Manager" />
                    <section className="container">
                        <h2>Start Page (temp)</h2>

                        <h3>Collection Exercise</h3>
                        <p><Link className="btn btn-info btn-large" to={'/create'}>Create</Link></p>
                        <p><Link className="btn btn-info btn-large" to={'/publish'}>Publish</Link></p>
                        <p><Link className="btn btn-info btn-large" to={'/list'}>List</Link></p>
                    </section>
                </section>
            );
        },

        collectionExerciseCreate: function () {
            return (
                <section>
                    <PageTitleComponent title="ONS Surveys Manager" />
                    <section className="container">
                        <AddCollectionExercisesContainer />
                    </section>
                </section>
            )
        },

        collectionExercisePublish: function () {
            return (
                <section>
                    <PageTitleComponent title="ONS Surveys Manager" />
                    <section className="container">
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
                    </section>
                </section>
            );
        },

        collectionExerciseList: function () {
            return (
                <section>
                    <PageTitleComponent title="ONS Surveys Manager" />
                    <section className="container">
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
                    </section>
                </section>
            )
        },

        noMatch: function () {
            return (
                <section>
                    <PageTitleComponent title="Oops.." />
                    <section className="container">
                        <h2>Sorry,</h2>
                        <h3>We were unable to find the page you were looking for.</h3>
                    </section>
                </section>
            );
        },

        default: function () {
            return pageState.tempHub();
        }
    },

    currentPage = 'collectionExerciseCreate';

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


/**
 * Application store
 */
var appStore = Redux.createStore(
    Redux.combineReducers({
        user: userReducer,
        routing: routerReducer
    })
);

var history = syncHistoryWithStore(browserHistory, appStore);


/**
 * Boot
 */
jQuery(document).ready(function () {

    ReactDOM.render(
        <Provider store={appStore}>
            <Router history={history}>
                <Route path="/" component={pageState.default} />
                <Route path="/create" component={pageState.collectionExerciseCreate}/>
                <Route path="/publish" component={pageState.collectionExercisePublish}/>
                <Route path="/list" component={pageState.collectionExerciseList}/>
                <Route path="*" component={pageState.noMatch}/>
            </Router>
        </Provider>,

        document.getElementById('app'));

});