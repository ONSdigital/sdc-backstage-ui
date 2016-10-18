var PageTitleComponent = require('../PageTitle/PageTitle.comp.jsx');

var MainLayout = React.createClass({

	render: function () {
		return (
			<section>
				<PageTitleComponent title="ONS Surveys Manager" />
				{this.props.children}
			</section>
		);
	}

});

module.exports = MainLayout;