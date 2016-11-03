var Link = require('react-router').Link,
	collectionExerciseFilters = require('../../../filters/collectionExercises.jsx');

module.exports = function () {

	var tabClass = function (status) {
		return 'tab ' + (status === this.props.activeFilter ? 'tab-on' : 'tab-off');
	}.bind(this);

	return (
		<section className="collection-exercise-list-component">
			<div className="container">
				<div className="row tab-bar-wrap">
					<div className="col-xs-12">

						<h3>Collection Exercises</h3>

						<div className="tab-bar">
							<div className="tabs">
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'live')} className={tabClass('live')}>Live</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'scheduled')} className={tabClass('scheduled')}>Scheduled</button>
								<button onClick={this.props.onCollectionFilterClick.bind(this, 'all')} className={tabClass('all')}>All</button>
							</div>
							<button onClick={this.props.onAddCollectionExerciseClick} className="btn btn-primary add-btn">Add collection exercise(s)</button>
						</div>

					</div>
				</div>
			</div>

			<div className="container">
				<section className="row survey-list">
					<div className="table-wrap">
						<table>
							<thead>
								<tr className="table-header">
									<th className="survey-reference"><strong>Code</strong></th>
									<th className="survey"><strong>Title [Sort A-Z]</strong></th>
									<th className="status"><strong>Status</strong></th>
									<th className="period"><strong>MPS Date</strong></th>
								</tr>
							</thead>
							<tbody>
								{this.props.allCollectionExercises
									.filter(function (item) {
										if (this.props.activeFilter === 'all') {
											return true;
										}

										return item.state === this.props.activeFilter;
									}.bind(this))
									.sort(function (a, b) {
										if(a.survey.name < b.survey.name) {
											return -1;
										}
										if(a.survey.name > b.survey.name) {
											return 1;
										}
										return 0;
									})
									.map(function (item) {
										return (
											<tr key={item.id} className="t-row">
												<td>{item.survey.reference}</td>
												<td><Link to={'/collection-exercises/details/'+item.id}>{item.survey.name}</Link></td>
												<td><span>{collectionExerciseFilters.getPrettyStatus(item["state"])}</span></td>
												<td><span>{moment(item["key_dates"].mps.date).format('Do MMM YYYY')}</span></td>
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