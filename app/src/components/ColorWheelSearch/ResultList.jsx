import React from 'react';
import ListItem from './ListItem';

const ResultList = ({results, filterText}) => {

  // let listItems = results.reduce((newArr, result) => {
  //   let textInName = filterText.length && result.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
  //   let addToProductArrayAtIndex = (index) => newArr[index] = newArr[index] ? newArr[index].concat(result) : [result];
  //
  //   // add sorted arrays to the new array,
  //   // based on text match, user status, & defaults.
  //   // Sorting ordered by:
  //   if (textInName && isShowingUserPrefs) {
  //     // 1) text matched query & user prefs
  //     addToProductArrayAtIndex(0);
  //   } else if (textInName) {
  //     // 2) text matched query
  //     addToProductArrayAtIndex(1);
  //   } else if (isShowingUserPrefs) {
  //     // 3) user prefs
  //     addToProductArrayAtIndex(2);
  //   } else {
  //     // 4) defaults
  //     addToProductArrayAtIndex(3);
  //   }
  //
  //   return newArr;
  // }, [])
  // // flatten array of arrays
  // .reduce((a, b) => a.concat(b))
  // .map((result) => {
  //   return (
  //     <ListItem
  //       key={result.name}
  //       result={result}
  //     />
  //   );
  // });

  let listItems = results.map((result) => {
    return (
      <ListItem
        key={result.name}
        result={result}
      />
    );
  });

  return (
    <ul className="result-list">{listItems}</ul>
  );
}

export default ResultList;
