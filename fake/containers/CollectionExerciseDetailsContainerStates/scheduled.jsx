var Redux = require('react-redux'),

	assign = require('object-assign'),

	CollectionExerciseDetailsComponent = require('../../../app/components/CollectionExerciseDetailsPage/CollectionExerciseDetailsPage.comp.jsx'),
	stub = require('./stub.jsx'),
	stubDispatch = require('./stub-dispatch.jsx');

function mapStateToProps () {
	var adj = assign({}, stub);

	adj.details.state = 'scheduled';

	return stub;
}

function mapDispatchToProps () {
	return stubDispatch;
}

module.exports = Redux.connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionExerciseDetailsComponent);