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
    CollectionExerciseDetailsContainer = require('./containers/CollectionExerciseDetailsContainer.jsx'),

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


locationActions.setStore(appStore);

/**
 * Get config, fetch data
 * Must be a better place to put this
 */
jQuery.ajax('/config.json',
    {
        dataType: "json"
    }
).then(function (res) {
    window.config = window.config || {};
    window.config.app = res.app;

    appStore.dispatch(surveyActions.REQUEST());
    appStore.dispatch(surveyActions.FETCH());

    appStore.dispatch(collectionExerciseActions.REQUEST_ALL());
    appStore.dispatch(collectionExerciseActions.FETCH_ALL());

    if(res.env === 'dev') {
        console.log('dev');
        //document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');

        jQuery(document).ready(function () {
            //$(document).append('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
        });
    }


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
                        <Route path="collection-exercises/details/:id" component={CollectionExerciseDetailsContainer} />
                    </Route>
                    <Route path="*" component={NoMatchLayout} />
                </Router>
            </Provider>,

            document.getElementById('app'));

    });
});