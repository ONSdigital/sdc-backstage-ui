module.exports = function () {
    return (

        <section className="add-collection-exercises-component">

            <h2>Add Collection Excercises</h2>

            <div className="form-container">
                <p>{this.state.testProp}</p>

                <input onClick={this.props.onSaveClicked} type="submit" value="Save and continue" />
            </div>

        </section>

    );
};