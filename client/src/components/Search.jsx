import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleClick(e) {
    this.props.onSearch(this.state.term);
    setTimeout(() => {
      this.props.getRepos();
    }, 500);
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a github username:{' '}
        <input value={this.state.terms} onChange={this.onChange} />
        <button onClick={this.handleClick}> Add Repos </button>
      </div>
    );
  }
}

export default Search;
