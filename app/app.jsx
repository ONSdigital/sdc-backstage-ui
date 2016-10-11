var AddCollectionExercisesComponent = require('./components/AddCollectionExercises/AddCollectionExercises.comp.jsx'),
    PageTitleComponent = require('./components/shared/PageTitle/PageTitle.comp.jsx');


/**
 * Application store
 * ...
 */
var appStore = {};

var AppComponent = function () {
    return (
        <section>
            <PageTitleComponent title="ONS Surveys Manager" />
            <AddCollectionExercisesComponent />
        </section>
    );
}


/**
 * Boot
 */
jQuery(document).ready(function () {

    ReactDOM.render(<AppComponent />, document.getElementById('app'));

});