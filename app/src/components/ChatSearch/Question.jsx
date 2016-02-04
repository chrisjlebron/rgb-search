import React from 'react';

// checkResults(results) {
//   case (resultType === result.type && values(prefs).length):
//     return matchingResults(prefs, results) && moreQuestions();
//     break;
//   case (resultType === result.type):
//     return moreQuestions();
//     break;
//   default:
//     return null;
//     break;
// }

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
          return inputTextArray.indexOf(result.type) !== -1 ||
            inputValue.length &&
              inputValue.toLowerCase() === result.title.toLowerCase();
        }).reduce((type, result) => {
          return type ? type : result.type;
        }, '');

        let getSize = () => {
          if (inputValue.indexOf('big') !== -1) {
            return 'big';
          } else if (inputValue.indexOf('small') !== -1)
          return 'small';
        };

        onTermsSubmit({
          resultType: resultType.length ? resultType : '',
          preferences: {
            size: getSize()
          }
        });
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
