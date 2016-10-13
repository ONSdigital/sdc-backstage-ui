var Router = require('react-router').Router,
    Route = require('react-router').Route,
    Link = require('react-router').Link,
    browserHistory = require('react-router').browserHistory,

    syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore,
    routerReducer = require('react-router-redux').routerReducer,

    render = require('react-dom'),

    AddCollectionExercisesContainer = require('../../containers/AddCollectionExercisesContainer.jsx'),
    PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx');

var history = syncHistoryWithStore(browserHistory, store);

var pageState = {

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
                            <button className="btn btn-primary">Publish</button>
                        </div>
                    </section>
                </section>
            );
        },

        collectionExerciseList: function () {
            return (
                <section>
                    <PageTitleComponent title="Some other page" />
                    <section className="container">
                        <ul className="row">
                            <li className="col-xs-6">
                                <strong>Survey</strong>
                            </li>
                            <li className="col-xs-6">
                                <strong>Period</strong>
                            </li>
                        </ul>
                    </section>
                </section>
            )
        },

        default: function () {
            return pageState.collectionExercisePublish();
        }
    },

    currentPage = 'collectionExerciseCreate';


var AppComponent = React.createClass({

    componentWillReceiveProps: function (nextProps) {
        console.log(nextProps);
    },

    /**
     * Replace with react router
     *
     * TODO
     * Setup roots to change components used
     */
    render: function () {
        return (
            <Router history={history}>
                <Route path="/" component={pageState.default}>
                    <Route path="create" component={pageState.collectionExerciseCreate}/>
                </Route>
            </Router>
        );
    }

});

module.exports = AppComponent;