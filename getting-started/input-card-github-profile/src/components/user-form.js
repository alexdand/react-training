import React, { Component } from 'react';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" />
                <input type="submit" name="Submit!" />
            </form>
        );
    }
}

export default UserForm;