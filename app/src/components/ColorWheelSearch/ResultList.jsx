import React from 'react';
import ListItem from './ListItem';
import Article from './Article';

import {capitalize} from 'lodash';

const ResultList = ({results, category, onUserClick, view}) => {
  let listItems;

  switch (view) {
    case 'colors':
      listItems = results.map((result) => {
        return (
          <ListItem
            key={result.name}
            result={result}
            onUserClick={onUserClick}
          />
        );
      });
      break;
    case 'articles':
      listItems = results.map((result) => {
        return (
          <Article
            key={result.guid}
            category={category}
            result={result}
            onArtcileClick={onUserClick}
          />
        );
      });
      break;
    default:
  }

  let resultsTitle = category ? `${capitalize(category.name)}s` : 'All';

  return (
    <div className="ResultContainer">
      <h4>{resultsTitle}</h4>
      <ul className="ResultList inline-list">{listItems}</ul>
    </div>
  );
}

export default ResultList;
