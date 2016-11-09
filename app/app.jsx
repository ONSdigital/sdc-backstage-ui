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
    HomeContainer = require('./containers/HomeContainer.jsx'),

    /**
     * Actions
     */
    surveyActions = require('./actions/Surveys.actions.jsx'),
    locationActions = require('./actions/Location.actions.jsx'),
    collectionExerciseActions = require('./actions/CollectionExercises.actions.jsx'),
    uiActions = require('./actions/ui.actions.jsx'),

    /**
     * Components
     */
    MainLayout = require('./components/shared/layout/MainLayout.jsx'),
    NoMatchLayout = require('./components/shared/layout/NoMatchLayout.jsx'),
    PageTitleComponent = require('./components/shared/PageTitle/PageTitle.comp.jsx'),

    /**
     * Store
     */
    appStore = require('./stores/backstage.store.jsx'),


    /**
     * Fake
     */
    FakeCollectionExerciseDetailsContainer_Scheduled = require('../fake/containers/CollectionExerciseDetailsContainerStates/scheduled.jsx'),
    FakeCollectionExerciseDetailsContainer_SampleLoaded = require('../fake/containers/CollectionExerciseDetailsContainerStates/sample_loaded.jsx'),
    FakeCollectionExerciseDetailsContainer_Published = require('../fake/containers/CollectionExerciseDetailsContainerStates/published.jsx'),
    FakeCollectionExerciseDetailsContainer_Live = require('../fake/containers/CollectionExerciseDetailsContainerStates/live.jsx');


var history = syncHistoryWithStore(browserHistory, appStore);

var pageState = {

        start: function () {
            return (
                <div>
                    <PageTitleComponent title="SDC Backstage UI Prototype" />
                    <div className="container">
                        <h3>API</h3>
                        <p><Link className="btn btn-info" to={'/collection-exercises'}>Collection Exercises</Link></p>

                        <h3>UI</h3>
                        <h4>Collection Exercise States</h4>
                        <p><Link className="btn btn-info" to={'/ui/collection-exercise/scheduled'}>Scheduled</Link></p>
                        <p><Link className="btn btn-info" to={'/ui/collection-exercise/sample-loaded'}>Sample loaded</Link></p>
                        <p><Link className="btn btn-info" to={'/ui/collection-exercise/published'}>Published</Link></p>
                        <p><Link className="btn btn-info" to={'/ui/collection-exercise/live'}>Live</Link></p>
                    </div>
                </div>
            );
        },

        home: function () {
            return (
                <div>
                    <PageTitleComponent title="ONS Business Surveys" />
                    <section className="home-page-component">
                        <div className="container">
                            <h1>fwrkg</h1>
                        </div>
                    </section>
                </div>
            );
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
    appStore.dispatch(surveyActions.FETCH())
        .then(function () {
            appStore.dispatch(collectionExerciseActions.REQUEST_ALL());
            appStore.dispatch(collectionExerciseActions.FETCH_ALL())
                .then(function () {
                    setupApp();
                });
        });

    if(res.env === 'dev') {
        console.log('dev');
        //document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');

        jQuery(document).ready(function () {
            $(document).append('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
        });
    }
});

function getCollectionExerciseDetailsMiddleware (store) {

    return function (nextState, replace, callback) {

        var routerParamId = parseInt(nextState.params.id);

        var collectionExerciseMatch = _.find(store.getState().collectionExercises.items, function (collectionExercise) {
            return collectionExercise.id === routerParamId;
        });

        if (!collectionExerciseMatch) {
            appStore.dispatch(collectionExerciseActions.FETCH(routerParamId))
                .then(function () {
                    callback();
                });
        }
        else {
            appStore.dispatch(uiActions.SHOW_COLLECTION_EXERCISE_DETAILS(routerParamId));
            callback();
        }
    };

}

function collectionExerciseListMiddleware (nextState, replace) {

	if (!nextState.params.status) {
		appStore.dispatch(collectionExerciseActions.UI_FILTER('live'));
		return;
	}

	if (nextState.params.status && nextState.params.status === 'all') {
		appStore.dispatch(collectionExerciseActions.UI_FILTER(''));
	}

	appStore.dispatch(collectionExerciseActions.UI_FILTER(nextState.params.status));

}

function homeMiddleware (nextState, replace) {

    appStore.dispatch(collectionExerciseActions.UI_FILTER('live'));

}

function setupApp () {

    /**
     * Boot
     */
    render(
        <Provider store={appStore}>
            <Router history={history}>
                <Route component={MainLayout}>
                    <Route path="/" onEnter={homeMiddleware} component={HomeContainer} />

                    <Route path="start" component={pageState.start} />

                    /**
                     * API
                     */
                    <Route path="collection-exercises" onEnter={collectionExerciseListMiddleware} component={CollectionExerciseListContainer} />
                    <Route path="collection-exercises/create" component={AddCollectionExercisesContainer} />
                    <Route path="collection-exercises/details/:id" onEnter={getCollectionExerciseDetailsMiddleware(appStore)} component={CollectionExerciseDetailsContainer} />

					<Route path="collection-exercises/:status" onEnter={collectionExerciseListMiddleware} component={CollectionExerciseListContainer} />

                    /**
                     * UI
                     */
                    <Route path="ui/collection-exercise/scheduled" component={FakeCollectionExerciseDetailsContainer_Scheduled} />
                    <Route path="ui/collection-exercise/sample-loaded" component={FakeCollectionExerciseDetailsContainer_SampleLoaded} />
                    <Route path="ui/collection-exercise/published" component={FakeCollectionExerciseDetailsContainer_Published} />
                    <Route path="ui/collection-exercise/live" component={FakeCollectionExerciseDetailsContainer_Live} />
                </Route>
                <Route path="*" component={NoMatchLayout} />
            </Router>
        </Provider>,

        document.getElementById('app'));

}