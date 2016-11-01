var CollectionExerciseList = React.createClass({

	onCollectionFilterClick: function (status, e) {
		this.props.onCollectionFilterClick(status);
	},

	render: function () {
		return require('./CollectionExerciseList.html.jsx').bind(this)();
	},

});

CollectionExerciseList.propTypes = {
	allCollectionExercises: React.PropTypes.array,
	onCollectionFilterClick: React.PropTypes.func.isRequired,
	onAddCollectionExerciseClick: React.PropTypes.func.isRequired,
	activeFilter: React.PropTypes.string.isRequired
};

module.exports = CollectionExerciseList;