import React from 'react';

const ProfileResult = ({result}) => {
  return {
    render() {
      return (
        <li className="ProfileResult">
          {result.title}
        </li>
      );
    }
  }
};

export default ProfileResult;
