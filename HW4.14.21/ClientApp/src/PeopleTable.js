import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        person: { firstName: '', lastName: '', age: ''},
        people: []
    }

    onFirstNameChange = e => {
        this.setState({
            person: {
                ...this.state.person,
                firstName: e.target.value,
            },
        });
    }

    onLastNameChange = e => {
        this.setState({
            person: {
                ...this.state.person,
                lastName: e.target.value,
            },
        });
    }

    onAgeChange = e => {
        this.setState({
            person: {
                ...this.state.person,
                age: e.target.value,
            },
        });
    }

    onAddClick = e => {
        const { people } = this.state;
        const peopleCopy = [...people, this.state.person];
        this.setState({ people: peopleCopy, person: { firstName: '', lastName: '', age: '' } });
    }

    onClearClick = e => {
        this.setState({ people: [], person: { firstName: '', lastName: '', age: '' } });
    }

    generateTable = () => {

        if (this.state.people.length > 0) {
            return <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.generatePersonRows()}
                </tbody>
            </table>
        }
        else {
            return <h1>No people added yet...Add some people!</h1>
        }
    }

    generatePersonRows = () => {
        return this.state.people.map((person, i) => <PersonRow key={i} rowPerson={person}  />)
    }

    render() {
        return (
            <div className="container">
                <PersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    person={this.state.person}
                />
                {this.generateTable()}
            </div >
        );
    }
}



export default PeopleTable;



//{ this.state.people.map((person, i) => <tr className={person > 65 ? 'table-danger' : ''}><td>person.firstName</td><td>person.lastName</td><td>person.age</td></tr>) }

//{this.state.people.map((person, i) => <li key={i} className={person > 65 ? 'table-danger' : ''} >{person.firstName}</li>)}
