import React from 'react';
import ResultList from './ResultList';
import ResultMeta from './ResultMeta';

import articles from '../../fixtures/articles';

import {sortByAll} from 'lodash';

const SearchResults = ({results, categories, filterText, onUserClick, onViewToggle, view, articles}) => {
  let category,
      disambiguationRow,
      opposite,
      oppositeCategory,
      oppositeRelated,
      related;

  // set default results & sort by category name, then result name
  let searchResults = sortByAll(results, ['category', 'name']);

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
    // grab category object based on match
    category = categories.filter((cat) => cat.name === exactMatch[0].category)[0];
    // filter results based on category, then sort by text match
    searchResults = results
      .filter((result) => result.category === category.name)
      .sort((a, b) => {
        if (a.name === filterText) return -1;
        if (b.name === filterText) return 1;
        return 0;
    });
    // grab related objects based on "related" data from category
    related = results.filter((result) => category.related.indexOf(result.name) !== -1);
    // grab opposite object based on "opposite" data from category
    opposite = results.filter((result) => result.name === category.opposite)[0];
    // grab opposite category object from category data
    oppositeCategory = categories.filter((cat) => cat.name === opposite.category)[0];
    // grab objects related to opposite
    oppositeRelated = results.filter((result) => oppositeCategory.related.indexOf(result.name) !== -1);
    // build disambiguation row array
    disambiguationRow = [
      {title: 'Match\'s Neighbors', results: related},
      {title: 'Opposite', results: [opposite]},
      {title: 'Opposite\'s Neighbors', results: oppositeRelated}
    ];
  }

  if (view === 'articles') {
    searchResults = articles.filter((a) => a.tags.indexOf(category.name) !== -1);
  }

  return (
    <div className="SearchResults">
      <ResultMeta
        disambiguationRow={disambiguationRow}
        category={category}
        onUserClick={onUserClick}
        onViewToggle={onViewToggle}
        view={view}
      />
      <ResultList
        results={searchResults}
        category={category}
        onUserClick={onUserClick}
        view={view}
      />
    </div>
  )
}

// Set prop validation
SearchResults.propTypes = {
  articles: React.PropTypes.arrayOf(React.PropTypes.object)
}

// Set default props for SearchResults
SearchResults.defaultProps = {
  articles: articles.get()
};

export default SearchResults;
