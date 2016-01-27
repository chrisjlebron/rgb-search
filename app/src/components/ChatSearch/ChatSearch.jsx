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
      resultType: ''
    }
  }

  handleTermsInput(termsText) {
    this.setState({
      termsText: termsText
    });
  }

  handleTermsSubmit(resultType) {
    this.setState({
      resultType: resultType
    });
  }

  render() {
    return (
      <div className="ChatSearch">
        <h2>{'Chat Search'}</h2>
        <Question
          termsText={this.state.termsText}
          resultType={this.state.resultType}
          onTermsInput={this.handleTermsInput}
          onTermsSubmit={this.handleTermsSubmit}
          results={this.props.profiles}
        />
        <SearchResults
          results={this.props.profiles}
          resultType={this.state.resultType}
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
