import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, contact } = this?.props;

    return (
      <div id="user-class">
        <span id="span">Developed By: {name}</span>
        <span id="span">Location: {location}</span>
        <span id="span">Contact: {contact}</span>
      </div>
    );
  }
}

export default UserClass;
