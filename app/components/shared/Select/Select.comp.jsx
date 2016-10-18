var SelectComponent = React.createClass({

	render: function () {
		return require('./Select.html.jsx').bind(this)();
	}

});

SelectComponent.propTypes = {
	onChange: React.PropTypes.func
};

module.exports = SelectComponent;