var NoMatchLayout = React.createClass({

	render: function () {
		return (
			<section>
				<PageTitleComponent title="Oops.." />
				<section className="container">
					<h2>Sorry,</h2>
					<h3>We were unable to find the page you were looking for.</h3>
				</section>
			</section>
		);
	}

});

module.exports = NoMatchLayout;