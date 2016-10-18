var Redux = require('react-redux'),

	locationActions = require('../actions/Location.actions.jsx'),
    CollectionExercisesActions = require('../actions/CollectionExercises.actions.jsx'),
    AddCollectionExercisesComponent = require('../components/AddCollectionExercises/AddCollectionExercises.comp.jsx');


var createReportingUnitOption = function (value, title) {
	return {
		value: value,
		title: title
	};
};

var reportingUnitOptions = function (key) {
	return {
		"annual": [
			[
				createReportingUnitOption("2017", "2017"),
				createReportingUnitOption("2018", "2018"),
				createReportingUnitOption("2019", "2019"),
				createReportingUnitOption("2020", "2020"),
				createReportingUnitOption("2021", "2021"),
				createReportingUnitOption("2022", "2022")
			]
		],
		"quarterly": [
			[
				createReportingUnitOption("2017-Q1", "2017 Quarter 1"),
				createReportingUnitOption("2017-Q2", "2017 Quarter 2"),
				createReportingUnitOption("2017-Q3", "2017 Quarter 3"),
				createReportingUnitOption("2017-Q4", "2017 Quarter 4")
			],
			[
				createReportingUnitOption("2018-Q1", "2018 Quarter 1"),
				createReportingUnitOption("2018-Q2", "2018 Quarter 2"),
				createReportingUnitOption("2018-Q3", "2018 Quarter 3"),
				createReportingUnitOption("2018-Q4", "2018 Quarter 4")
			],
			[
				createReportingUnitOption("2019-Q1", "2019 Quarter 1"),
				createReportingUnitOption("2019-Q2", "2019 Quarter 2"),
				createReportingUnitOption("2019-Q3", "2019 Quarter 3"),
				createReportingUnitOption("2019-Q4", "2019 Quarter 4")
			],
			[
				createReportingUnitOption("2020-Q1", "2020 Quarter 1"),
				createReportingUnitOption("2020-Q2", "2020 Quarter 2"),
				createReportingUnitOption("2020-Q3", "2020 Quarter 3"),
				createReportingUnitOption("2020-Q4", "2020 Quarter 4")
			]
		],
		"monthly": [
			[
				createReportingUnitOption("2016-11", "2016 November"),
				createReportingUnitOption("2016-12", "2016 December")
			],
			[
				createReportingUnitOption("2017-01", "2017 January"),
				createReportingUnitOption("2017-02", "2017 February"),
				createReportingUnitOption("2017-03", "2017 March"),
				createReportingUnitOption("2017-04", "2017 April"),
				createReportingUnitOption("2017-05", "2017 May"),
				createReportingUnitOption("2017-06", "2017 June"),
				createReportingUnitOption("2017-07", "2017 July"),
				createReportingUnitOption("2017-08", "2017 August"),
				createReportingUnitOption("2017-09", "2017 September"),
				createReportingUnitOption("2017-10", "2017 October"),
				createReportingUnitOption("2017-11", "2017 November"),
				createReportingUnitOption("2017-12", "2017 December")
			]
		]
	}[key] || [];
};

var mapStateToProps  = function (state) {
    return {
		surveyList: state.surveys.items.map(function (item) {
				return {
					value: item.title,
					title: item.title,
					frequency: item.frequency
				};
			})
			.sort(function (last, next) {
				var lastTitle = last.value.toLowerCase(),
					nextTitle = next.value.toLowerCase();

				if(lastTitle < nextTitle) {
					return -1;
				}

				if(lastTitle > nextTitle) {
					return 1;
				}
				return 0;
			}),

		selectedReportingPeriodOptions: reportingUnitOptions(state.ui.collectionExercise.add.selectedReportingPeriodType)
    };
};

var mapDispatchToProps = function (dispatch) {
    return {
        onSaveClicked: function () {
            dispatch(CollectionExercisesActions.ADD());
			locationActions.change('/');
        },

		onSurveyListOptionChange: function (e) {
			var el = e.target;
			console.log($('option:selected', el).attr('data-frequency'));
			dispatch(CollectionExercisesActions.TOGGLE_PERIOD($('option:selected', el).attr('data-frequency')));
		}
    }
};

var AddCollectionExercisesContainer = Redux.connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCollectionExercisesComponent);


module.exports = AddCollectionExercisesContainer;