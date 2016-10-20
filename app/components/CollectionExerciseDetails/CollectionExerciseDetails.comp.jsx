var CollectionExerciseDetails = React.createClass({

	render: function () {
		return require('./CollectionExerciseDetails.html.jsx').bind(this)();
	},

});

CollectionExerciseDetails.propTypes = {
	details: React.PropTypes.object
};

module.exports = CollectionExerciseDetails;