import React from 'react';

const ProfileResult = ({result}) => {
  return (
    <li className="ProfileResult">
      <div className="profile-title"><b>Title:</b> {result.title}</div>
      <div className="profile-type"><b>Type:</b> {result.type}</div>
      <div className="profile-size"><b>Size:</b> {result.size}</div>
      <div className="profile-setting"><b>Setting:</b> {result.setting}</div>
      <div className="profile-gpa_cutoff"><b>GPA Cutoff:</b> {result.gpa_cutoff.toFixed(1)}</div>
      <div className="profile-tuition_cost"><b>Tuition Cost:</b> {result.tuition_cost}</div>
      <div className="profile-region"><b>Region:</b> {result.region}</div>
    </li>
  );
};

export default ProfileResult;
