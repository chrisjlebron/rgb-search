import React from 'react';
import ProfileResult from './ProfileResult.jsx';

const SearchResults = ({results}) => {
  return {
    render() {
      let searchResults = results.map((result) => {
        return (
          <ProfileResult
            key={result.id}
            result={result}
          />
        );
      });

      return (
        <ul className="SearchResults">
          {searchResults}
        </ul>
      );
    }
  }
};

export default SearchResults;
