var CollectionExerciseList = React.createClass({

	render: function () {
		return require('./CollectionExerciseList.html.jsx').bind(this)();
	},

});

CollectionExerciseList.propTypes = {
	collectionExercises: React.PropTypes.array
};

module.exports = CollectionExerciseList;