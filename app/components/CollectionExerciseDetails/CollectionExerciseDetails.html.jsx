var Link = require('react-router').Link;

module.exports = function () {

	if($.isEmptyObject(this.props.details)) {
		return <div></div>
	}

	return (
		<div className="container">
			<section className="collection-exercise-details-component">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to={'/'}>Back to start</Link>
					</li>
					<li className="breadcrumb-item">
						<Link to={'/collection-exercises'}>Collection Exercises</Link>
					</li>
					<li className="breadcrumb-item active">
						<span>{this.props.details.survey_title}</span>
					</li>
				</ol>

				<div className="page-header">
					<h2>Collection Exercise</h2>
					<h3>{this.props.details.survey_title}</h3>
				</div>

				<div className="page-container">

					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<ul className="details-list">
								<li className="row">
									<label className="col-xs-6 title">Status:</label>
									<strong className="col-xs-6 detail">{this.props.details.state}</strong>
								</li>
								{/*<li className="row">
									<label className="col-xs-6 title">Number of forms:</label>
									<strong className="col-xs-6">[form count]</strong>
								</li>*/}
							</ul>
						</div>
						<div className="col-xs-12 col-sm-6">
							<div className="col-xs-12">
								<ul className="details-list">
									<li className="row">
										<h4>Actions</h4>
										<div className="btn-toolbar" role="toolbar" aria-label="...">
											<div className="btn-group" role="group" aria-label="...">
												<button onClick={this.props.onPublishedClicked} className="btn btn-info">Publish</button>
												<button className="btn btn-info">[Download?]</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<h4>Dates</h4>
							<ul className="details-list">
								{this.props.details['key_dates'].map(function (item, i) {
									return (
										<li key={i} className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{item.description}:</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(item.date).format('Do MMMM YYYY')}</strong>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="col-xs-12 col-sm-6">
							<h4>Current Samples</h4>
							<ul className="details-list">
								<li className="row details-list-item">
									<strong className="col-xs-4 title">RU Reference:</strong>
									<strong className="col-xs-4 title">Business Name</strong>
									<strong className="col-xs-4 title">Form Type</strong>
								</li>
								{this.props.details.samples.map(function (item) {
									return (
										<li key={item.id} className="row details-list-item">
											<strong className="col-xs-4 detail">{item['reporting_unit_ref']}:</strong>
											<strong className="col-xs-4 detail">{item['business_name']}</strong>
											<strong className="col-xs-4 detail">{item['form_type']}</strong>
										</li>
									);
								})}
							</ul>

							<ul className="details-list">
								<li className="row details-list-item">
									<label className="col-xs-4 title">Number of RU's:</label>
									<strong className="col-xs-8 detail">[RU count]</strong>
								</li>
							</ul>
							<ul className="details-list">
								<li className="details-list-item">
									<form id="samples-form">
										<input name="samples_csv_file" accept=".csv" type="file" />
									</form>
								</li>
							</ul>
							<ul className="details-list">
								<li className="details-list-item">
									<button onClick={this.props.onSamplesUploadClicked} className="btn btn-info">Upload and Save</button>
								</li>
							</ul>

							<h4 className="fade">Question Sets</h4>
							<ul className="details-list">
								<li className="row details-list-item">
									<label className="col-xs-12 col-sm-6 title">[Subject]:</label>
									<strong className="col-xs-12 col-sm-6 detail">[Details]</strong>
								</li>
							</ul>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<Link className="btn btn-default" to={'/collection-exercises'}>Back to Collection Exercises</Link>
						</div>
					</div>

				</div>

			</section>
		</div>
	);

};