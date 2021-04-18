import React from 'react';

class PersonRow extends React.Component {

    render() {
        return (
            <tr className={this.props.rowPerson.age > 65 ? 'table-danger' : ''} key={ this.key}><td>{this.props.rowPerson.firstName}</td><td>{this.props.rowPerson.lastName}</td><td>{this.props.rowPerson.age}</td></tr>
        );
    }
}
export default PersonRow;
