import React from 'react';
import ListItem from './ListItem';
import Article from './Article';

import {capitalize} from 'lodash';

const ResultList = ({results, category, onUserClick, view}) => {
  let listItems,
      containerStyles,
      resultsTitle = 'All',
      listClasses = 'ResultList inline-list';

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
      listClasses += ' article-list';
      listItems = results.map((result) => {
        return (
          <Article
            key={result.guid}
            category={category}
            result={result}
            onArtcileClick={onUserClick}
          />
        );
      });``
      break;
    default:
  }
  if (category) {
    resultsTitle += ` ${capitalize(view)} in ${capitalize(category.name)}`;
    containerStyles = {
      boxShadow: `0 0 3px rgba(0,0,0,.15), 0 -6px 0 ${category.colorValue}`
    };
  }

  return (
    <div
      className="ResultContainer"
      style={containerStyles}
    >
      <h4>{resultsTitle}</h4>
      <ul className={listClasses}>{listItems}</ul>
    </div>
  );
}

export default ResultList;
