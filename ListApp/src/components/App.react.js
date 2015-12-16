var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var List = require('./List.react');

// In practice, we would publish FilterBar to npm and require it from there.
// For the purposes of this demo, we will just require it from the file system.
var FilterBar = require('../../../FilterBar')(React, AppActions);

var App = React.createClass({
  
  getInitialState: function() {
    return { items: AppStore.getAll() };
  },
  
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    return(
      <div>
        <FilterBar />
        <List items={this.state.items} />
      </div>
    );
  },
  
  _onChange: function() {
    this.setState({ items: AppStore.getAll() });
  }
});

module.exports = App;
