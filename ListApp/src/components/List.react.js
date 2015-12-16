var React = require('react');
var ListItem = require('./ListItem.react');

var List = React.createClass({
  
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  
  render: function() {
    var listItems = [];
    var items = this.props.items;
    
    listItems = items.map(function(item, key) {
      return (<ListItem key={key} item={item} />)
    });
    
    return(
      <div className="list-group">
        {listItems}
      </div>
    );
  }
});

module.exports = List;
