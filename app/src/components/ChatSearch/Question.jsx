import React from 'react';

const Question = ({onTermsInput}) => {
  return {
    handleChange(event) {
      onTermsInput(event.target.value);
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
          />
        <span className={helperClasses}>{'Hit Enter to submit'}</span>
        </div>
      );
    }
  }
};

export default Question;
