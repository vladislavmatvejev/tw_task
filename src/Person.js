import React from 'react';

class Person extends React.Component {
    render() {
        const {
            person
        } = this.props;
        console.log(person);

        return <span><input
            ref={(input) => this.textInput = input}
            type="text"
            value={person.name.first + ' ' + person.name.last} />
        </span>;
    }
}

export default Person;