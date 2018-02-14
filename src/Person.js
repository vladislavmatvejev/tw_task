import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandInfo: false
        }
        this.expandPersonInfo = this.expandPersonInfo.bind(this);
    }
    expandPersonInfo() {
        const currentState = this.state.expandInfo;
        this.setState({expandInfo: !currentState});
        if(currentState) alert(1);
    }
    render() {
        const {
            person
        } = this.props;

        return <span
            className={this.state.expandInfo ? 'add-class' : null}
            onClick={this.expandPersonInfo}
        >{person.name.first + ' ' + person.name.last}</span>;
    }
}

export default Person;