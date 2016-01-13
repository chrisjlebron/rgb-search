import React from 'react';
import ResultList from './ResultList';
import ResultRow from './ResultRow';
import ResultDisambiguation from './ResultDisambiguation';

import {sortByAll} from 'lodash';

const SearchResults = (props) => {
  const results = sortByAll(props.results, ['category', 'name']);
  const categories = props.categories;
  const filterText = props.filterText;

  let disambiguationRow, resultsRow;
  let category, categoryMatches, related, opposite, oppositeCategory, oppositeRelated;
  // let matches = results.filter((result) => {
  //   if (result.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
  //     return result;
  //   }
  // });
  let exactMatch = results.filter((match) => {
    if (match.name.toLowerCase() === filterText.toLowerCase()) {
      return match;
    }
  });

  if (exactMatch.length) {
    category = categories.filter((cat) => cat.name === exactMatch[0].category)[0];
    categoryMatches = results
      .filter((result) => result.category === category.name)
      .sort((a, b) => {
        if (a.name === filterText) return -1;
        if (b.name === filterText) return 1;
        return 0;
      });
    related = results.filter((result) => category.related.indexOf(result.name) !== -1);
    opposite = results.filter((result) => result.name === category.opposite)[0];
    oppositeCategory = categories.filter((cat) => cat.name === opposite.category)[0];
    oppositeRelated = results.filter((result) => oppositeCategory.related.indexOf(result.name) !== -1);
  }


  disambiguationRow = [(
    <ResultRow
      key='disambiguation'
      row={[{title: 'Match\'s Neighbors', results: related}, {title: 'Opposite', results: [opposite]}, {title: 'Opposite\'s Neighbors', results: oppositeRelated}]}
      onUserClick={props.onUserClick}
    />
  )];

  if (!exactMatch.length) {
    disambiguationRow = null;
  }

  resultsRow = [(
    <ResultRow
      key='all'
      row={[{title: 'Available Data', results: exactMatch.length ? exactMatch.concat(categoryMatches) : results}]}
      onUserClick={props.onUserClick}
      />
  )];

  return (
    <div className="SearchResults">
      <ul className="ResultDisambiguation" {...props}>{disambiguationRow}</ul>
      <ul className="ResultList" {...props}>{resultsRow}</ul>
    </div>
  )
}

export default SearchResults;
