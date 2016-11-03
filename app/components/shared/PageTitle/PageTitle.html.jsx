module.exports = function () {
    return (

        <section>
            <div className="page-title-container">

                <div className="container">
                    <div className="row">

                        <div className="page-title-component">
                            <h1>{this.state.title}</h1>

                            <div className="pivots">
                                <strong className="name"><button className="account-toggle">Jacky Bond <i className="chevron"></i></button></strong>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="system-message-wrap">
                <div className="container">
                    <div className="row">
                        <p className="system-message">
                            <strong className="system-message">System status: [status]</strong> Issues, actions required
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};