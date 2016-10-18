var Provider = require('react-redux').Provider,
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    Link = require('react-router').Link,
    browserHistory = require('react-router').browserHistory,

    syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,

    render = require('react-dom').render,

    /**
     * Containers
     */
    AddCollectionExercisesContainer = require('./containers/AddCollectionExercisesContainer.jsx'),
    CollectionExerciseListContainer = require('./containers/CollectionExerciseListContainer.jsx'),

    /**
     * Actions
     */
    surveyActions = require('./actions/Surveys.actions.jsx'),
    locationActions = require('./actions/Location.actions.jsx'),
    collectionExerciseActions = require('./actions/CollectionExercises.actions.jsx'),

    /**
     * Components
     */
    MainLayout = require('./components/shared/layout/MainLayout.jsx'),
    NoMatchLayout = require('./components/shared/layout/NoMatchLayout.jsx'),

    /**
     * Store
     */
    appStore = require('./stores/backstage.store.jsx');


var history = syncHistoryWithStore(browserHistory, appStore);

var pageState = {

        tempHub: function () {
            return (
                <div className="container">
                    <h2>Start Page (temp)</h2>

                    <h3>Collection Exercise</h3>
                    <p><Link className="btn btn-info btn-large" to={'/collection-exercises'}>View Collection Exercises</Link></p>
                </div>
            );
        },

        collectionExercise: {

            create: function () {
                return (
                    <div className="container">
                        <AddCollectionExercisesContainer />
                    </div>
                );
            },

            publish: function () {
                return (
                    <div className="container">
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
                    <CollectionExerciseListContainer />
                );
            }

        },

        default: function () {
            return pageState.tempHub();
        }
    };

appStore.dispatch(surveyActions.REQUEST());
appStore.dispatch(surveyActions.FETCH());

appStore.dispatch(collectionExerciseActions.REQUEST_ALL());
appStore.dispatch(collectionExerciseActions.FETCH_ALL());

locationActions.setStore(appStore);

/**
 * Boot
 */
jQuery(document).ready(function () {

    render(
        <Provider store={appStore}>
            <Router history={history}>
                <Route component={MainLayout}>
                    <Route path="/" component={pageState.default} />
                    <Route path="collection-exercises" component={pageState.collectionExercise.list} />
                    <Route path="collection-exercises/create" component={pageState.collectionExercise.create} />
                    <Route path="collection-exercises/publish" component={pageState.collectionExercise.publish} />
                </Route>
                <Route path="*" component={NoMatchLayout} />
            </Router>
        </Provider>,

        document.getElementById('app'));

});