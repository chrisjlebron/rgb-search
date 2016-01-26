import React from 'react';
import DisambiguationRow from './DisambiguationRow';
import ToggleViewSection from './ToggleViewSection';

const ResultMeta = ({disambiguationRow, category, onUserClick, onViewToggle, view}) => {
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

  let toggleViewSection;

  if (typeof category === 'object') {
    toggleViewSection = (
      <ToggleViewSection
        category={category}
        onViewToggle={onViewToggle}
        view={view}
      />
    );
  }

  return (
    <div className="ResultMeta">
      {renderDisambiguationRow()}
      {toggleViewSection ? toggleViewSection : null}
    </div>
  );
}

export default ResultMeta;
