var Redux = require('react-redux'),

	assign = require('object-assign'),

	CollectionExerciseDetailsComponent = require('../../../app/components/CollectionExerciseDetails/CollectionExerciseDetails.comp.jsx'),
	stub = require('./stub.jsx');

function noop () {}

function mapStateToProps () {
	var adj = assign({}, stub);

	adj.details.state = 'scheduled';

	return stub;
}

function mapDispatchToProps () {
	return {
		onStateChangeClicked: noop,
		onSamplesUploadClicked: noop
	};
}

module.exports = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);