var Link = require('react-router').Link,
	PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx'),
	CollectionExerciseListComponent = require('../shared/CollectionExerciseList/CollectionExerciseList.comp.jsx');

module.exports = function () {
	return (
		<div>
			<PageTitleComponent title="ONS Business Surveys" />

			<div className="container">
				<div className="row">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to={'/'}>Home</Link>
						</li>
						<li className="breadcrumb-item">
							<span>Collection Exercises</span>
						</li>
					</ol>
				</div>
			</div>

			<CollectionExerciseListComponent
				onCollectionFilterClick={this.props.onCollectionFilterClick}
				allCollectionExercises={this.props.allCollectionExercises}
				onAddCollectionExerciseClick={this.props.onAddCollectionExerciseClick}
				activeFilter={this.props.activeFilter} />
		</div>
	);
};