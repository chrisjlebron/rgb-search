import React from 'react';
import ListItem from './ListItem';

import {capitalize} from 'lodash';

const ResultList = ({results, category, onUserClick}) => {
  let listItems = results.map((result) => {
    return (
      <ListItem
        key={result.name}
        result={result}
        onUserClick={onUserClick}
      />
    );
  });
  let resultsTitle = category ? `${capitalize(category.name)}s` : 'All';

  return (
    <div className="ResultContainer">
      <h4>{resultsTitle}</h4>
      <ul className="ResultList">{listItems}</ul>
    </div>
  );
}

export default ResultList;
