import React from 'react';
import ResultRow from './ResultRow';
import ListItem from './ListItem';

import {findIndex} from 'lodash';

const ResultList = ({results, filterText}) => {
  let listItems = results.map((result) => {
    let row;
    let related;
    let opposite;
    let oppositeRelated;
    let key = result.name;
    let filterRelated = (outerArray, matchObject) => {
      return outerArray.filter((relatedResult) => {
        return matchObject.related.indexOf(relatedResult.name) !== -1;
      });
    };

    if (filterText.length) {
      // // filterText contains result.name
      // let match = result.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ? result : undefined;

      // // filterText equals result.name
      let match = result.name.toLowerCase() === filterText.toLowerCase() ? result : undefined;

      if (match) {
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
      } else {
        // user input doesn't match any results
        return false;
      }
    } else {
      row = [
        {title: `${result.name}s`, results: result.tints}
      ]
    }

    return (
      <ResultRow
        key={key}
        row={row}
      />
    );
  });

  return (
    <ul className="ResultList">{listItems}</ul>
  );
}

export default ResultList;
