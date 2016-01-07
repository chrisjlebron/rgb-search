import React from 'react';
import ListItem from './ListItem'

const ResultRow = ({row}) => {
  let resultRowList = row.map((resultGroup, id) => {
    let groupMembers = resultGroup.results.map((result) => {
      return (
        <ListItem
          key={result.name}
          result={result}
        />
      );
    });

    return (
      <li key={id} className="ResultGroup">
        <h4>{resultGroup.title}</h4>
        <ul>{groupMembers}</ul>
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
