import React from 'react';
import Person from './Person';

class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {persons: []};
    }

    componentDidMount() {
        let url = 'http://localhost:3000/address-book';

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
    render() {
        const {
            persons
        } = this.state;

        var content =
            persons.map( (person, idx) =>
                <li key={idx}>
                    <Person person={person} />
                </li> );

        return <ul>{content}</ul>
    }
}

export default PersonList;