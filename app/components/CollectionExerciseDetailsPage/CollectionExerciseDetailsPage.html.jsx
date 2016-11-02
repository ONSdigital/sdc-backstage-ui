var Link = require('react-router').Link,
	collectionExerciseFilters = require('../../filters/collectionExercises.jsx'),
	PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx');

module.exports = function () {

	if($.isEmptyObject(this.props.details)) {
		return <div></div>
	}

	function toggle(condition) {
		return {
			display : (condition ? '' : 'none')
		};
	}

	return (
		<div>
			<PageTitleComponent title="Business Survey Data Collection" />
			<div className="container">
				<div className="row">
					<section className="collection-exercise-details-component">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link to={'/'}>Home</Link>
							</li>
							<li className="breadcrumb-item">
								<Link to={'/collection-exercises'}>Collection Exercises</Link>
							</li>
							<li className="breadcrumb-item active">
								<span>{this.props.survey.name}</span>
							</li>
						</ol>

						<div className="page-header">
							<h2>{this.props.survey.name}</h2>
						</div>

						<div className="page-container">
							<div className="row">
								<div className="col-xs-12">
									<h4>Status: <strong>{collectionExerciseFilters.getPrettyStatus(this.props.details.state)}</strong></h4>
									<p style={toggle(this.props.details.state === 'live')}><a href="">[View reminder settings]</a></p>
									<br />
								</div>
							</div>

							<div className="row">
								<div className="col-xs-12 col-sm-6">

									<h4>Dates</h4>
									<ul className="details-list">
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].employment_date.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].employment_date.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].exercise_end.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].exercise_end.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].exercise_go_live.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].exercise_go_live.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].first_reminder.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].first_reminder.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].mps.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].mps.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].results_run.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].results_run.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].return_by.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].return_by.date).format('Do MMM YYYY')}</strong>
										</li>
									</ul>
									<ul className="details-list">
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].reporting_period_start.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].reporting_period_start.date).format('Do MMM YYYY')}</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-6 title">{this.props.details['key_dates'].reporting_period_end.description}</label>
											<strong className="col-xs-12 col-sm-6 detail">{moment(this.props.details['key_dates'].reporting_period_end.date).format('Do MMM YYYY')}</strong>
										</li>
									</ul>
								</div>
								<div className="col-xs-12 col-sm-6">

									<div style={toggle(this.props.details.state === 'live')}>
										<h4>Responses: [361 of 4971 = 7% (target 83%)]</h4>
										<ul className="details-list">
											<li className="row details-list-item">
												<label className="col-xs-12 col-sm-6 title">Started online</label>
												<strong className="col-xs-12 col-sm-6 detail">23</strong>
											</li>
											<li className="row details-list-item">
												<label className="col-xs-12 col-sm-6 title">Completed online</label>
												<strong className="col-xs-12 col-sm-6 detail">338</strong>
											</li>
											<li className="row details-list-item">
												<label className="col-xs-12 col-sm-6 title">Completed paper</label>
												<strong className="col-xs-12 col-sm-6 detail">23</strong>
											</li>
										</ul>
										<br />
									</div>

									<div style={toggle(this.props.details.state === 'sample_loaded' || this.props.details.state === 'published' || this.props.details.state === 'live')}>
										<h4>Sample</h4>
										<p><a href="">[4123] Reporting Units</a></p>
									</div>

									<h4 className="fade">Question Sets</h4>
									<ul className="details-list">
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-4 title">[Subject]</label>
											<strong className="col-xs-12 col-sm-8 detail">[Details]</strong>
										</li>
									</ul>
									<br />

									<h4 className="fade">Survey</h4>
									<ul className="details-list">
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-4 title">Long title</label>
											<strong className="col-xs-12 col-sm-8 detail"><span>{this.props.survey.name}</span></strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-4 title">Short title</label>
											<strong className="col-xs-12 col-sm-8 detail">[MWSS]</strong>
										</li>
										<li className="row details-list-item">
											<label className="col-xs-12 col-sm-4 title">Reference no.</label>
											<strong className="col-xs-12 col-sm-8 detail">{this.props.survey.reference}</strong>
										</li>
									</ul>
									<br />
								</div>
							</div>

						</div>

					</section>
				</div>

				<div style={{marginBottom : '50px'}}>
					<div style={toggle(this.props.details.state === 'scheduled')}>

						<h4>Current Samples</h4>
						{/*<ul className="details-list" style={toggle(this.props.details.samples.length)}>
						 <li className="row details-list-item">
						 <strong className="col-xs-4 title">RU Reference</strong>
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
						 </ul>*/}
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
						<br />
					</div>
					{/*<button style={toggle(this.props.details.state === 'scheduled')} className="btn btn-primary">[Set as Ready for sample]</button>*/}
					<button style={toggle(this.props.details.state === 'sample_loaded')} onClick={this.props.onStateChangeClicked.bind(this, 'published')} className="btn btn-primary">Publish</button>
					<button style={toggle(this.props.details.state === 'published')} onClick={this.props.onStateChangeClicked.bind(this, 'live')} className="btn btn-primary">Go Live</button>
					<button style={toggle(this.props.details.state === 'live')} onClick={this.props.onStateChangeClicked.bind(this, 'closed')} className="btn btn-primary">Close</button>
				</div>

			</div>
		</div>
	);

};