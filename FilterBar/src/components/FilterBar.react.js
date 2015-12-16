// var React = require('react');

/**
 * React is only passed in here to make browserify happy.
 * The assumption here is that if FilterBar was on npm,
 * browserify would correctly package only one version of React.
 * We might have to do some work here on importing React components
 * but it should be a well-known problem so I'm not worried.
*/
var FilterBar = function(React, AppActions) {
  return React.createClass({
    render: function() {
      return(
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this._onChange}
            autoFocus={true}
            placeholder="Filter by name..."
          />
        </div>
      );
    },
    
    _onChange: function(evt) {
      AppActions.filter(evt.target.value);
    }
  });
};

module.exports = FilterBar;
