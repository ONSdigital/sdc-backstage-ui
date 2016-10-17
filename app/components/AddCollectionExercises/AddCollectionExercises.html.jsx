module.exports = function () {
    return (

        <section className="add-collection-exercises-component">

            <h2>Add Collection Excercises</h2>

            <div className="form-container">

                <ul className="field-list">
                    <li>
                        <h4>Part of Survey</h4>
                        <select>
                            {this.props.surveyList.map(function (item) {
                                return (
                                    <option key={item.key} value={item.key}>{item.value}</option>
                                );
                            })}
                        </select>
                    </li>
                    <li>
                        <h4>Reporting Unit</h4>
                        <p>{this.props.testProp}</p>
                    </li>
                </ul>

                <input className="btn btn-primary btn-large" onClick={this.props.onSaveClicked} type="submit" value="Save and continue" />
            </div>

        </section>

    );
};