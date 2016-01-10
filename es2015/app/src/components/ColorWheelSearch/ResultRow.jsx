import React from 'react';
import ListItem from './ListItem'

const ResultRow = ({row}) => {
  let resultRowList = row.map((resultGroup, id) => {
    let additionalClasses = '';
    let groupMembers = resultGroup.results.map((result) => {
      return (
        <ListItem
          key={result.name}
          result={result}
        />
      );
    });

    if (resultGroup.title === 'Match' || resultGroup.title === 'Available Data') {
      additionalClasses = 'matching-group';
    } else {
      additionalClasses = 'disambiguation-group'
    }


    return (
      <li
        key={id}
        className={`ResultGroup ${additionalClasses}`}
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
