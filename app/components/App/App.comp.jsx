var AddCollectionExercisesContainer = require('../../containers/AddCollectionExercisesContainer.jsx'),
    PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx');

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
            return this.collectionExerciseCreate();
        }
    },

    currentPage = 'default';


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
            pageState[this.props.page]()
        );
    }
});

module.exports = AppComponent;