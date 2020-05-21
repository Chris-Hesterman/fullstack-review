import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => {
  let repoList = (
    <tr>
      <td>DB is empty</td>
    </tr>
  );
  if (props.repos.length) {
    repoList = props.repos.map((repo) => {
      return <RepoListItem repo={repo} key={repo.url} />;
    });
  }

  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Repo URL</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>{repoList}</tbody>
      </table>
    </div>
  );
};
export default RepoList;
