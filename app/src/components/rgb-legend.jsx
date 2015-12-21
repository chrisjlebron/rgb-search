import React from 'react';

const Legend = () => {

  return (
    <div className="Legend">
      <h4>Color Legend</h4>
      <ul>
        <li><span className="color-key our-results"></span>Default results</li>
        <li><span className="color-key from-input"></span>Matches query</li>
        <li><span className="color-key user-likes"></span>User preferences</li>
        <li><span className="color-key user-likes from-input"></span>Matches query &amp; user preferences</li>
      </ul>
    </div>
  );
}

export default Legend;
