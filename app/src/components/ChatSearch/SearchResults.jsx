import React from 'react';
import ProfileResult from './ProfileResult.jsx';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  getSearchResults(results) {
    return results.filter((result) => {
      return result.type === this.props.resultType;
    }).map((result) => {
      return (
        <ProfileResult
          key={result.id}
          result={result}
        />
      );
    });
  }

  render() {
    return (
      <ul className="SearchResults">
        {this.getSearchResults(this.props.results)}
      </ul>
    );
  }
}

export default SearchResults;
