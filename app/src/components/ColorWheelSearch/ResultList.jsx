import React from 'react';
import ResultRow from './ResultRow';
import ListItem from './ListItem';

import {findIndex} from 'lodash';

const ResultList = ({results, filterText}) => {
  let listClass = '';
  let listItems = results.map((result) => {
    let row;
    let match;
    let related;
    let opposite;
    let oppositeRelated;
    let filterRelated = (outerArray, matchObject) => {
      return outerArray.filter((relatedResult) => {
        return matchObject.related.indexOf(relatedResult.name) !== -1;
      });
    };

    if (filterText.length) {
      // // filterText contains result.name
      match = result.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ? result : undefined;

      // // filterText equals result.name
      // match = result.name.toLowerCase() === filterText.toLowerCase() ? result : undefined;
      listClass = 'ResultList';
    } else {
      listClass = 'result-list';
        return (
          <ListItem
            key={result.name}
            result={result}
          />
        );
    }

    if (typeof match === 'object') {
      opposite = results.filter((oppResult) => {
        return oppResult.name === match.opposite;
      });
      related = filterRelated(results, match);
      oppositeRelated = filterRelated(results, opposite[0]);
      row = [
        {title: 'Match', results: [match]},
        {title: 'Match\'s Neighbors', results: related},
        {title: 'Opposite', results: opposite},
        {title: 'Opposite\'s Neighbors', results: oppositeRelated}
      ];

      return (
        <ResultRow
          key={match.name}
          row={row}
        />
      );
    }
  });

  return (
    <ul className={listClass}>{listItems}</ul>
  );
}

export default ResultList;
