import React from 'react';
import DisambiguationRow from './DisambiguationRow';

const ResultMeta = ({disambiguationRow, category, onUserClick}) => {
  let renderRow = () => {
    if (disambiguationRow) {
      return (
        <DisambiguationRow
          row={disambiguationRow}
          onUserClick={onUserClick}
        />
      );
    }

    // don't render disambiguation section if no row data
    return null;
  };

  let catTitle;

  if (typeof category === 'object') {
    catTitle = category.name;
  }

  return (
    <div className="ResultMeta">
      {renderRow()}
      {catTitle ? `${catTitle}'s` : null}
    </div>
  );
}

export default ResultMeta;
