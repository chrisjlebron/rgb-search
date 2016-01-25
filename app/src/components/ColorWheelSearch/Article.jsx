import React from 'react';

import {capitalize} from 'lodash';

const Article = ({result, category, onArtcileClick}) => {
  return {
    handleClick() {
      onArtcileClick(result.title);
    },

    render() {
      return (
        <li
          className="Article"
          onClick={this.handleClick}
        >
          <span className="result-name article-title">{capitalize(result.title)}</span>
          <div
            className="article-wrap"
            style={{padding: '1em'}}
          >
            <img
              className="article-img"
              src={result.picture}
            />
            <p className="article-blurb">{capitalize(result.blurb)}</p>
            <div className="article-text" style={{display: 'none'}}>{result.full_text}</div>
          </div>
        </li>
      );
    }
  }
};

export default Article;
