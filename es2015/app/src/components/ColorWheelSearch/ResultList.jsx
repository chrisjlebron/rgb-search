import React from 'react';
import ResultRow from './ResultRow';

import {sortByAll} from 'lodash';

const ResultList = ({results, filterText, categories}) => {
  results = sortByAll(results, ['category', 'name']);

  let mapResults = () => {
    return results.map((result) => {
      let row;
      let key;

      /**
       * - Hook up click handler to perform search for clicked element
       */

      // // filterText contains result.name
      // let match = result.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ? result : undefined;

      // // filterText equals result.name
      let match = result.name.toLowerCase() === filterText.toLowerCase() ? result : undefined;

      if (match) {
        let category = categories.filter((cat) => cat.name === match.category)[0];
        let matches = results
          .filter((res) => res.category === category.name)
          .sort((a, b) => {
            if (a.name === filterText) return -1;
            if (b.name === filterText) return 1;
            return 0;
          });
        let related = results.filter((res) => category.related.indexOf(res.name) !== -1);
        let opposite = results.filter((res) => res.name === category.opposite)[0];
        let oppCategory = categories.filter((cat) => cat.name === opposite.category)[0];
        let oppositeRelated = results.filter((res) => oppCategory.related.indexOf(res.name) !== -1);

        key = match.name;
        row = [
          {title: 'Match\'s Neighbors', results: related},
          {title: 'Opposite', results: [opposite]},
          {title: 'Opposite\'s Neighbors', results: oppositeRelated},
          {title: 'Match', results: matches}
        ];
      } else {
        // // user input doesn't match any results
        return false;
      }

      return (
        <ResultRow
          key={key}
          row={row}
        />
      );
    });
  };

  let listItems = [(
      // no user input is default
      <ResultRow
        key={'all'}
        row={[{title: 'Available Data', results: results}]}
      />
  )];

  if (filterText.length) {
    listItems = mapResults();
  }

  return (
    <ul className="ResultList">{listItems}</ul>
  );
}

export default ResultList;
