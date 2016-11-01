var Redux = require('react-redux'),

	assign = require('object-assign'),

	CollectionExerciseDetailsComponent = require('../../../app/components/CollectionExerciseDetailsPage/CollectionExerciseDetailsPage.comp.jsx'),
	stub = require('./stub.jsx'),
	stubDispatch = require('./stub-dispatch.jsx');

var ids = 0;

function mapStateToProps () {
	var adj = assign({}, stub);

	adj.details.samples = [{
		id: 'iuh29ef2'+ids++,
		reporting_unit_ref: 'bres',
		business_name: 'Business Name',
		form_type: 'FE3F'
	}];

	adj.details.state = 'sample_loaded';

	return adj;
}

function mapDispatchToProps () {
	return stubDispatch;
}

module.exports = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);