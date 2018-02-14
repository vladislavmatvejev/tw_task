import React from 'react';
import Person from './Person';

class PersonList extends React.Component {
    constructor() {
        super();
        this.state = {
            persons: [],
            filteredPersons: [],
            searchString: ''
        };

        this.updateSearchString = this.updateSearchString.bind(this);
    }

    componentDidMount() {
        let url = 'http://localhost:3000/persons-list';

        fetch(url)
            .then(response => {
                if(response.status >= 400) {
                    throw new Error('Server does not respond');
                }
                return response.json();
            })
            .then(data => {
                this.setState({persons: data});
            })
    }

    updateSearchString(event) {
        this.setState({
            searchString: event.target.value.toLowerCase()
        });
    }
    render() {
        const {
            persons
        } = this.state;

        let filteredPersonList = persons.filter(person => {
            var fullName = person.name.first.toLowerCase() + person.name.last.toLowerCase();
            return fullName.indexOf(this.state.searchString) !== -1;
        });

        let content =
            filteredPersonList.map( (person, idx) =>
                <li key={idx}>
                    <Person person={person} />
                </li> );

        return (
            <div className="person-list">
                <div className="search">
                    <input
                        className="input-search"
                        value={this.state.searchString}
                        onChange={this.updateSearchString}
                        placeholder="Enter first or last name"
                    />
                </div>
                <div className="list">
                    <ul>{content}</ul>
                </div>
            </div>
        );
    }
}

export default PersonList;