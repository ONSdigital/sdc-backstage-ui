var Link = require('react-router').Link,
	collectionExerciseFilters = require('../../filters/collectionExercises.jsx'),
	PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx'),
	CollectionExerciseListComponent = require('../shared/CollectionExerciseList/CollectionExerciseList.comp.jsx'),

	assign = require('object-assign');

module.exports = function () {

	//var listComp = assign({}, CollectionExerciseListComponent, this.props);

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