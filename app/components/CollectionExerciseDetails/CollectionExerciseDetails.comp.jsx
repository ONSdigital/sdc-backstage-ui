var CollectionExerciseDetails = React.createClass({

	render: function () {
		return require('./CollectionExerciseDetails.html.jsx').bind(this)();
	},

});

CollectionExerciseDetails.propTypes = {
	details: React.PropTypes.object,
	onStateChangeClicked: React.PropTypes.func.isRequired,
	onSamplesUploadClicked: React.PropTypes.func.isRequired
};

module.exports = CollectionExerciseDetails;