var Link = require('react-router').Link,
    PageTitleComponent = require('../shared/PageTitle/PageTitle.comp.jsx');

module.exports = function () {

    var reportingUnitItem = function () {
        if(!this.props.selectedReportingPeriodOptions.length) {
            return;
        }

        return (
            <li className="field-list-item">
                <h4 className="title">Reporting Period</h4>
                {this.props.selectedReportingPeriodOptions.map(function (segment) {

                    return (
                        <ul className="period period-selection" key={'period'+segment[0].value}>
                            {segment.map(function (period) {
                                return (
                                    <li key={period.value}>
                                        <label key={period.value}>
                                            <input name="period" value={period.value} className="period-checkbox" type="checkbox" /> {period.title}
                                        </label>
                                    </li>
                                );
                            }.bind(this))}
                        </ul>
                    );

                }.bind(this))}
            </li>
        );

    }.bind(this);

    return (

        <div>
            <PageTitleComponent title="ONS Business Surveys" />
            <section className="add-collection-exercises-component">

                <div className="container">
                    <div className="row">

                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={'/collection-exercises'}>Collection Exercises</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <span>Add Collection Exercise(s)</span>
                            </li>
                        </ol>

                        <div className="page-header">
                            <h2>Add Collection Excercises</h2>
                        </div>

                        <div className="form-container">

                            <ul className="field-list">
                                <li className="field-list-item">
                                    <h4 className="title">Part of Survey</h4>
                                    <select id="add-collection-exercises-dropdown" className="select-dropdown" onChange={this.props.onSurveyListOptionChange}>
                                        <option value="none">-</option>
                                        {this.props.surveyList.map(function (item) {
                                            return (
                                                <option data-frequency={item.frequency} key={item.value} value={item.value}>{item.title}</option>
                                            );
                                        }.bind(this))}
                                    </select>
                                </li>
                                {reportingUnitItem()}
                            </ul>

                            <input disabled={!this.props.selectedReportingPeriodOptions.length ? 'disabled' : ''} className="btn btn-primary btn-large" onClick={this.props.onSaveClicked} type="submit" value="Save and continue" />
                        </div>

                    </div>
                </div>

            </section>
        </div>

    );
};