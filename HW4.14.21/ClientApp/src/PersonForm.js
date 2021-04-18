import React from 'react';

class PersonForm extends React.Component {

    render() {
        return (
            <div className="container ">
                <div className="row jumbotron mt-5">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="First Name"
                            onChange={this.props.onFirstNameChange}
                            value={this.props.person.firstName}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Last Name"
                            onChange={this.props.onLastNameChange}
                            value={this.props.person.lastName}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Age"
                            onChange={this.props.onAgeChange}
                            value={this.props.person.age}
                        />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary mr-3" onClick={this.props.onAddClick}>Add</button>
                        <button className="btn btn-warning " onClick={this.props.onClearClick}>Clear All</button>
                    </div>
                </div>
            </div>)
    }
}

export default PersonForm;