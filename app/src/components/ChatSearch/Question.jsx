import React from 'react';

const Question = ({onTermsInput, onTermsSubmit, results}) => {
  return {
    handleChange(event) {
      onTermsInput(event.target.value);
    },

    handleSubmit(event) {
      let inputValue = event.target.value;

      if (
        event.key.toLowerCase() === 'enter' ||
        event.key.toLowerCase() === 'backspace' && !inputValue
      ) {
        let inputTextArray = inputValue.split(' ');

        let resultType = results.filter((result) => {
          return inputTextArray.indexOf(result.type) !== -1;
        }).reduce((type, result) => {
          return type ? type : result.type;
        }, '');

        onTermsSubmit(resultType.length ? resultType : '');
      }
    },

    render() {
      let helperClasses = `question-flex-child help-text
        ${this.props.termsText ? ' is-displayed' : ' is-hidden'}`;

      return (
        <div className="Question">
          <input
            type="text"
            className="terms-input question-flex-child"
            placeholder="What are you looking for today?"
            value={this.props.termsText}
            onChange={this.handleChange}
            onKeyUp={this.handleSubmit}
          />
        <span className={helperClasses}>{'Hit Enter to submit'}</span>
        </div>
      );
    }
  }
};

export default Question;
