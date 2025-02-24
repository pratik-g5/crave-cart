import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, contact } = this?.props;

    return (
      <div className="m-2 p-2 flex flex-col bg-[rgb(141,163,166)]">
        <span className=" p-2 font-bold">Developed By: {name}</span>
        <span className=" p-2 font-bold">Location: {location}</span>
        <span className=" p-2 font-bold">Contact: {contact}</span>
      </div>
    );
  }
}

export default UserClass;
