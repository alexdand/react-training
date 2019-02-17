import React, { Component } from 'react';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitUser(this.state.userName);
        this.setState({userName: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="Enter Github username"
                    value={this.state.userName} 
                    onChange={ (event) => { this.setState({userName: event.target.value})} }
                />
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

export default UserForm;