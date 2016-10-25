var Redux = require('react-redux'),

	CollectionExerciseDetailsComponent = require('../../../app/components/CollectionExerciseDetails/CollectionExerciseDetails.comp.jsx'),
	stub = require('./stub.jsx');

function noop () {}

function mapStateToProps () {
	return stub;
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