import React from 'react';

import {capitalize} from 'lodash';

const Article = ({result, category, onArtcileClick}) => {
  let styles = {
    backgroundImage: `url(${result.picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '20%',
    display: 'inline-block'
  }

  return {
    handleClick() {
      onArtcileClick(result.title);
    },

    render() {
      return (
        <li
          className="Article"
          style={styles}
          onClick={this.handleClick}
        >
          <span className="result-name article-title">{capitalize(result.title)}</span>
          <div
            className="article-wrap"
            style={{padding:'1em'}}
          >
            <p className="article-blurb">{capitalize(result.blurb)}</p>
            <div className="article-text" style={{display: 'none'}}>{result.full_text}</div>
          </div>
        </li>
      );
    }
  }
};

export default Article;
