import React from 'react';
import Question from './Question';
// import SearchResults from './SearchResults';

import profiles from '../../fixtures/profiles';

import '../../../stylesheets/components/ChatSearch.scss';

class ChatSearch extends React.Component {

  constructor() {
    super();

    this.handleTermsInput = this.handleTermsInput.bind(this);

    this.state = {
      termsText: ''
    }
  }

  handleTermsInput(termsText) {
    this.setState({
      termsText: termsText
    });
  }

  render() {
    return (
      <div className="ChatSearch">
        <h2>{'Chat Search'}</h2>
        <Question
          termsText={this.state.termsText}
          onTermsInput={this.handleTermsInput}
          results={this.props.profiles}
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
