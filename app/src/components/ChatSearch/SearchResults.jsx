import React from 'react';
import ProfileResult from './ProfileResult.jsx';

import {values} from 'lodash';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  // text => type => size => (filtered results) & setting => (filtered results) & gpa => (filtered results)
  // type & size => etc...
  //
  // if exact match, grab type from result...

  

  // matchingResults(prefs, results) {
  //   let returnedResults = [];
  //
  //   case (prefs.setting):
  //     return results.filter(result => prefs.setting === result.setting);
  //     break;
  //   case (prefs.gpa):
  //     return results.filter(result => prefs.gpa >= result.gpa_cutoff)
  //     break;
  //   case (prefs.region):
  //     return results.filter(result => prefs.region === result.region);
  //     break;
  //   case (prefs.tuition):
  //     return results.filter(result => prefs.tuition >= result.tuition_cost);
  //     break;
  //   default:
  //     return null;
  //     break;
  // }

  getFilteredResults(results) {
    let prefs = this.props.preferences;
    let filtered = results.filter(result => {
      // filter by result type
      return result.type === this.props.resultType;
    }).filter(result => {
      switch (prefs.size) {
        case 'small':
          return result.size < 20000;
          break;
        case 'big':
          return result.size >= 20000;
          break;
        default:
          return true;
      }
    }).filter(result => {
      if (prefs.setting) {
        return prefs.setting === result.setting;
      }
      return true;
    }).filter(result => {
      if (prefs.gpa) {
        return prefs.gpa >= result.gpa_cutoff;
      }
      return true;
    });
    debugger;
    return filtered;
  }

  getSearchResults(results) {
    let match = results.filter(result => this.props.termsText.toLowerCase() === result.title.toLowerCase());
    let filteredResults = match.length ? match : this.getFilteredResults(results);
    debugger;
    return filteredResults.map((result) => {
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
        {this.props.resultType ? this.getSearchResults(this.props.results) : null}
      </ul>
    );
  }
}

export default SearchResults;
