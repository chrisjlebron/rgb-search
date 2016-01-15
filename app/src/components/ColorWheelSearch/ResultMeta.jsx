import React from 'react';
import DisambiguationRow from './DisambiguationRow';

const ResultMeta = ({disambiguationRow, category, onUserClick}) => {
  let renderDisambiguationRow = () => {
    if (disambiguationRow) {
      return (
        <DisambiguationRow
          row={disambiguationRow}
          onUserClick={onUserClick}
        />
      );
    }

    // default: don't render disambiguation section if no row data
    return null;
  };

  let catTitle;

  if (typeof category === 'object') {
    // catTitle = category.name;
  }

  return (
    <div className="ResultMeta">
      {renderDisambiguationRow()}
      {catTitle ? catTitle : null}
    </div>
  );
}

export default ResultMeta;
