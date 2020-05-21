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
      return <RepoListItem repo={repo} key={repo.repoId} />;
    });
  }

  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.count.count} repos. <span>Here are the top 25</span>
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
