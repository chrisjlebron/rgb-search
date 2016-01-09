import React from 'react';
import ResultRow from './ResultRow';
import ListItem from './ListItem';

const ResultList = ({results, filterText, categories}) => {
  let mapListItems = () => {
    return results.map((result) => {
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

      /**
       * - Display all colors & tints
       * - Filter text input
       * - Grab results matching filterText
       * - Grab matching category object from categories
       * - Grab tangential data from category object
       * - Display tangential data as disambiguation unit
       * - Display main match & vector matches
       * - Hook up click handler to perform search for clicked element
       */

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

        // @TODO: this seems overkill...
        let tints = match.tints.map((tint) => {
          return {
            name: tint.name.indexOf('50') !== -1 ?
              tint.name.slice(0, tint.name.indexOf('50')) :
              tint.name,
            value: tint.value
          }
        });

        row = [
          {title: 'Match', results: tints},
          {title: 'Match\'s Neighbors', results: related},
          {title: 'Opposite', results: opposite},
          {title: 'Opposite\'s Neighbors', results: oppositeRelated}
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
    listItems = mapListItems();
  }

  return (
    <ul className="ResultList">{listItems}</ul>
  );
}

export default ResultList;
