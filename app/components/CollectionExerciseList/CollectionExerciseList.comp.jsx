var CollectionExerciseList = React.createClass({

	render: function () {
		return require('./CollectionExerciseList.html.jsx').bind(this)();
	},

});

CollectionExerciseList.propTypes = {
	collectionExercises: React.PropTypes.array,
	onCollectionFilterClick: React.PropTypes.func.isRequired
};

module.exports = CollectionExerciseList;