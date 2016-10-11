var PageTitleComp = React.createClass({

    getInitialState: function () {
        return {
            title: this.props.title
        };
    },

    render: function () {
        return require('./PageTitle.html.jsx').bind(this)();
    }

});

module.exports = PageTitleComp;