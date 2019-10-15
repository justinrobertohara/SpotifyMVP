import React from 'react';
import { get } from 'https';
const fetch = require('node-fetch');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { previousSearchResults: [], artistLookup: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let val = event.target.value.toLowerCase();
    console.log(event.target.value, event.target.name);
    event;
    this.setState({ artistLookup: val });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert('Looking Up Artist: ' + this.state.artistLookup);
    console.log(this.state.artistLookup);
    let searchQuery = this.state.artistLookup;

    fetch('/api/spotify/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: searchQuery
    })
      .then(res => res.text())
      .then(body => console.log(body));
  }

  render() {
    return (
      <div id="body">
        <div>DJ What's Next</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Artist:
            <input
              type="text"
              name="artistLookup"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div id="artistLookup">Suggested Artists:</div>
      </div>
    );
  }
}
