var AddCollectionExercisesComponent = React.createClass({

    render: function () {
        return require('./AddCollectionExercises.html.jsx').bind(this)();
    },

});

AddCollectionExercisesComponent.propTypes = {
    onSurveyListOptionChange: React.PropTypes.func.isRequired,
    onSaveClicked: React.PropTypes.func.isRequired,
    surveyList: React.PropTypes.array,
    selectedReportingPeriodOptions: React.PropTypes.array
};

module.exports = AddCollectionExercisesComponent;