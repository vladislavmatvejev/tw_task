import React from 'react';

class Person extends React.Component {
    render() {
        const {
            person
        } = this.props;

        return <span>{person.name.first + ' ' + person.name.last}</span>;
    }
}

export default Person;