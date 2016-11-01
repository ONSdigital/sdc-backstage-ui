var CollectionExerciseDetails = React.createClass({

	render: function () {
		return require('./CollectionExerciseDetailsPage.html.jsx').bind(this)();
	},

});

CollectionExerciseDetails.propTypes = {
	details: React.PropTypes.object,
	onStateChangeClicked: React.PropTypes.func.isRequired,
	onSamplesUploadClicked: React.PropTypes.func.isRequired
};

module.exports = CollectionExerciseDetails;