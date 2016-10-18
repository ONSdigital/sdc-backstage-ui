var PageTitleComponent = require('../PageTitle/PageTitle.comp.jsx');

var MainLayout = React.createClass({

	render: function () {
		return (
			<section>
				<PageTitleComponent title="ONS Surveys Manager" />
				<section className="container">
					{this.props.children}
				</section>
			</section>
		);
	}

});

module.exports = MainLayout;