import React from 'react';

class User extends React.Component {

    render() {
        return React.createElement('div', null, React.createElement('h1', null, "Hello React.createElement Example"))
    }
}

export default User;