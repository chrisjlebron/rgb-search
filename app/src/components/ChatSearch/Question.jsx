import React from 'react';

const Question = ({onTermsInput, onTermsSubmit, results}) => {
  return {
    handleChange(event) {
      onTermsInput(event.target.value);
    },

    handleSubmit(event) {
      if (event.key.toLowerCase() === 'enter') {
        let inputTextArray = event.target.value.split(' ');
        let profiles = results.filter((result) => {
          return inputTextArray.indexOf(result.type) !== -1;
        });
        onTermsSubmit(event.target.value);
      }
    },

    render() {
      let helperClasses = 'question-flex-child help-text';
      helperClasses += this.props.termsText ? ' is-displayed' : ' is-hidden';

      return (
        <div className="Question">
          <input
            type="text"
            className="terms-input question-flex-child"
            placeholder="What are you looking for today?"
            value={this.props.termsText}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
          />
        <span className={helperClasses}>{'Hit Enter to submit'}</span>
        </div>
      );
    }
  }
};

export default Question;
