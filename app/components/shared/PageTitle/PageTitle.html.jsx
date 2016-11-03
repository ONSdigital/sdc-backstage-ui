module.exports = function () {
    return (

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

            {this.props.children}

        </div>

    );
};