import React from 'react';
import ListItem from './ListItem'

const DisambiguationRow = ({row, onUserClick}) => {
  let disambiguationRowList = row.map((resultGroup, id) => {
    let groupMembers = resultGroup.results.map((result) => {
      return (
        <ListItem
          key={result.name}
          result={result}
          onUserClick={onUserClick}
        />
      );
    });

    return (
      <li
        key={id}
        className={`ResultGroup`}
      >
        <h4>{resultGroup.title}</h4>
        <ul className="inline-list">{groupMembers}</ul>
      </li>
    );
  });

  return (
    <ul className="DisambiguationRowList ul-reset">{disambiguationRowList}</ul>
  );
};

export default DisambiguationRow;
