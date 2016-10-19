var CollectionExerciseDetails = React.createClass({

	render: function () {
		console.log('param: ', this.props.params);

		return require('./CollectionExerciseDetails.html.jsx').bind(this)();
	},

});

CollectionExerciseDetails.propTypes = {};

module.exports = CollectionExerciseDetails;