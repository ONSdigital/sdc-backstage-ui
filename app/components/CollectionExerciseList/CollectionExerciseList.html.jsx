module.exports = function () {
	return (
		<section className="collection-exercise-list-component">
			<div className="tab-bar-wrap">
				<div className="container">

					<h3>Collection Exercises</h3>

					<div className="tab-bar">
						<div className="tabs">
							<button className="tab tab-on">Draft</button>
							<button className="tab tab-off">Published</button>
							<button className="tab tab-off">Closed</button>
							<button className="tab tab-off">All</button>
						</div>
						<button onClick={this.props.onAddCollectionExerciseClick} className="btn btn-primary add-btn">Add collection exercise</button>
					</div>

				</div>
			</div>

			<div className="container">
				<section className="survey-list">
					<div className="table-wrap">
						<table>
							<thead>
								<tr className="table-header">
									<th><strong>Survey</strong></th>
									<th><strong>Period</strong></th>
								</tr>
							</thead>
							<tbody>
								{this.props.allCollectionExercises.map(function (item) {
									return (
										<tr key={item.id} className="t-row">
											<td><a href="#">{item["survey_title"]}</a></td>
											<td><span>{item["period"]}</span></td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</section>
			</div>

		</section>

	);
};