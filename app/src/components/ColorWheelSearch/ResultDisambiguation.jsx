import React from 'react';
import DisambiguationRow from './DisambiguationRow';

import {capitalize} from 'lodash';

const ResultMeta = ({results, filterText, categories, onUserClick}) => {
  if (!filterText.length) {
    return {
      render() {
          return null;
      }
    }
  }

  // let mapResults = () => {
  //   return results.map((result) => {
  //     let row;
  //     let key;
  //
  //     // filterText equals result.name
  //     let match = result.name.toLowerCase() === filterText.toLowerCase() ? result : undefined;
  //
  //     if (match) {
  //       let category = categories.filter((cat) => cat.name === match.category)[0];
  //       let matches = results
  //         .filter((res) => res.category === category.name)
  //         .sort((a, b) => {
  //           if (a.name === filterText) return -1;
  //           if (b.name === filterText) return 1;
  //           return 0;
  //         });
  //       let related = results.filter((res) => category.related.indexOf(res.name) !== -1);
  //       let opposite = results.filter((res) => res.name === category.opposite)[0];
  //       let oppCategory = categories.filter((cat) => cat.name === opposite.category)[0];
  //       let oppositeRelated = results.filter((res) => oppCategory.related.indexOf(res.name) !== -1);
  //
  //       key = match.name;
  //       row = [
  //         {title: 'Match\'s Neighbors', results: related},
  //         {title: 'Opposite', results: [opposite]},
  //         {title: 'Opposite\'s Neighbors', results: oppositeRelated},
  //         {title: `Showing ${capitalize(category.name)}'s`, results: matches}
  //       ];
  //     } else {
  //       // // user input doesn't match any results
  //       return false;
  //     }
  //
  //     return (
  //       <DisambiguationRow
  //         key=`${key}-disambiguation`
  //         row={row}
  //         onUserClick={onUserClick}
  //       />
  //     );
  //   });
  // };
  //
  // let disambiguationGroup = [(
  //     // no user input is default
  //     <DisambiguationRow
  //       key={'all'}
  //       row={[{title: 'Available Data', results: results}]}
  //       onUserClick={onUserClick}
  //     />
  // )];
  //
  // if (filterText.length) {
  //   disambiguationGroup = mapResults();
  // }

  return (
    <ul className="ResultMeta">{disambiguationGroup}</ul>
  );
}

export default ResultMeta;
