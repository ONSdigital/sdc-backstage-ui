var Link = require('react-router').Link,
	PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx'),
	CollectionExerciseListComponent = require('../shared/CollectionExerciseList/CollectionExerciseList.comp.jsx');

module.exports = function () {
	return (
		<div className="home-page-component">
			<PageTitleComponent title="ONS Business Surveys" />

			<div className="container">
				<div className="row">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<span>Home</span>
						</li>
					</ol>
				</div>

				<div className="row search-wrap">
					<div className="col-xs-12">
						<h4>Search reporting units, Respondents and Collection Exercises</h4>
						<div className="search">
							<div className="input-group">
								<input className="form-control" placeholder="" />
								<span className="input-group-btn">
									<button className="btn btn-default" type="button">Search</button>
								</span>
							</div>
						</div>
					</div>
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
