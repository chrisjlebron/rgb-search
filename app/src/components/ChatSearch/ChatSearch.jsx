import React from 'react';
import Question from './Question';
import SearchResults from './SearchResults';

import profiles from '../../fixtures/profiles';

import '../../../stylesheets/components/ChatSearch.scss';

class ChatSearch extends React.Component {

  constructor() {
    super();

    this.handleTermsInput = this.handleTermsInput.bind(this);
    this.handleTermsSubmit = this.handleTermsSubmit.bind(this);

    this.state = {
      termsText: '',
      resultType: '',
      preferences: {}
    }
  }

  handleTermsInput(termsText) {
    this.setState({
      termsText: termsText
    });
  }

  handleTermsSubmit(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="ChatSearch">
        <h2>{'Chat Search'}</h2>
        <Question
          termsText={this.state.termsText}
          resultType={this.state.resultType}
          preferences={this.state.preferences}
          onTermsInput={this.handleTermsInput}
          onTermsSubmit={this.handleTermsSubmit}
          results={this.props.profiles}
        />
        <SearchResults
          termsText={this.state.termsText}
          results={this.props.profiles}
          resultType={this.state.resultType}
          preferences={this.state.preferences}
        />
      </div>
    );
  }

}

// Set prop validation
ChatSearch.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

// Set default props for ChatSearch
ChatSearch.defaultProps = {
  profiles: profiles.get()
};

export default ChatSearch;
