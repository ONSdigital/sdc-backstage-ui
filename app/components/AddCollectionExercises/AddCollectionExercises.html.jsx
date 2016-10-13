module.exports = function () {
    return (

        <section className="add-collection-exercises-component">

            <h2>Add Collection Excercises</h2>

            <div className="form-container">
                <p>{this.props.testProp}</p>

                <input className="btn btn-primary btn-large" onClick={this.props.onSaveClicked} type="submit" value="Save and continue" />
            </div>

        </section>

    );
};