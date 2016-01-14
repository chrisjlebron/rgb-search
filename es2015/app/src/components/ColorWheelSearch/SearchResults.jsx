import React from 'react';
// import ResultList from './ResultList';
import DisambiguationRow from './DisambiguationRow';
// import ResultDisambiguation from './ResultDisambiguation';
import ListItem from './ListItem';

import {sortByAll} from 'lodash';

const SearchResults = (props) => {
  const results = sortByAll(props.results, ['category', 'name']);
  const categories = props.categories;
  const filterText = props.filterText;

  let category,
      related,
      opposite,
      oppositeCategory,
      oppositeRelated;


  // don't show disambiguation section by default
  let disambiguationRow = null;

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

  // set default results
  let searchResults = results;

  if (exactMatch.length) {
    category = categories.filter((cat) => cat.name === exactMatch[0].category)[0];
    searchResults = results
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
    disambiguationRow = [(
      <DisambiguationRow
        key='disambiguation'
        row={[
          {title: 'Match\'s Neighbors', results: related},
          {title: 'Opposite', results: [opposite]},
          {title: 'Opposite\'s Neighbors', results: oppositeRelated}
        ]}
        onUserClick={props.onUserClick}
      />
    )];
  }

  searchResults = searchResults.map((result) => {
    return (
      <ListItem
        key={result.name}
        result={result}
        onUserClick={props.onUserClick}
      />
    );
  });

  return (
    <div className="SearchResults">
      <div className="ResultDisambiguation">{disambiguationRow}</div>
      <ul className="ResultList">
        <h4>{'Data'}</h4>
        {searchResults}
      </ul>
    </div>
  )
}

export default SearchResults;
