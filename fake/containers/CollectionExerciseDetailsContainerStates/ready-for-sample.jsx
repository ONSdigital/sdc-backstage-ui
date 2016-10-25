var Redux = require('react-redux'),

	assign = require('object-assign'),

	CollectionExerciseDetailsComponent = require('../../../app/components/CollectionExerciseDetails/CollectionExerciseDetails.comp.jsx'),
	stub = require('./stub.jsx');

function noop () {}

var ids = 0;

function mapStateToProps () {
	var adj = assign({}, stub);

	adj.details.samples.push({
		id: 'iuh29ef2'+ids++,
		reporting_unit_ref: 'bres',
		business_name: 'Business Name',
		form_type: 'FE3F'
	});

	return adj;
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