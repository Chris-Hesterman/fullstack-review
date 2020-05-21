import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      repoCount: 0
    };
    this.getRepos = this.getRepos.bind(this);
    this.search = this.search.bind(this);
  }

  search(term) {
    let data = { username: term };
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://127.0.0.1:1128/repos',
      method: 'POST',
      data: data
    })
      .done(() => {
        console.log('success');
      })
      .fail(() => {
        console.log('error');
      });
  }

  getRepos() {
    $.ajax({
      url: 'http://127.0.0.1:1128/repos',
      method: 'GET'
    })
      .done((data) => {
        let count = data.pop();
        console.log('setting state');
        this.setState({ repos: data, repoCount: count });
      })
      .fail(() => {
        console.log('error');
      });
  }

  componentDidMount() {
    this.getRepos();
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} count={this.state.repoCount} />
        <Search onSearch={this.search} getRepos={this.getRepos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
