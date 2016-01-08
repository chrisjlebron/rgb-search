import React from 'react';
import ListItem from './ListItem'

const ResultRow = ({row}) => {
  let resultRowList = row.map((resultGroup, id) => {
    let additionalStyles = {};
    let groupMembers = resultGroup.results.map((result) => {
      return (
        <ListItem
          key={result.name}
          result={result}
        />
      );
    });

    if (resultGroup.title === 'Match') {
      additionalStyles = {
        display: 'block'
      };
    }

    return (
      <li
        key={id}
        className="ResultGroup"
        style={additionalStyles}
      >
        <h4>{resultGroup.title}</h4>
        <ul className="group-members-list">{groupMembers}</ul>
      </li>
    );
  });

  return (
    <li className="ResultRow">
      <ul className="ResultRowList">{resultRowList}</ul>
    </li>
  );
};

export default ResultRow;
