var Redux = require('react-redux'),

	CollectionExerciseDetailsComponent = require('../../../app/components/CollectionExerciseDetails/CollectionExerciseDetails.comp.jsx'),
	keyDates = require('./fake-key-dates.jsx');

function noop () {}

var ids = 0;

function mapStateToProps () {
	return {
		details: {
			survey_title: 'MWSS - January 2017',
			state: 'scheduled',
			key_dates: keyDates,
			samples: []
		}
	};
}

function mapDispatchToProps () {
	return {
		onPublishedClicked: noop,
		onSamplesUploadClicked: noop
	};
}

module.exports = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);