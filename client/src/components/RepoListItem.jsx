import React from 'react';

const RepoListItem = (props) => (
  <tr>
    <td>{props.repo.name}</td>
    <td>{props.repo.username}</td>
    <td>
      <a href={props.repo.url}>{props.repo.url}</a>
    </td>
    <td>{props.repo.forks}</td>
  </tr>
);

export default RepoListItem;
