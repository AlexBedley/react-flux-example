var React = require('react');

var ListItem = React.createClass({
  
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return(
      <a className="list-group-item">
        <span className="h3">{this.props.item.name} <small>{this.props.item.network}</small></span>
        <div className="pull-right">
          <span className="glyphicon glyphicon-menu-right" />
        </div>
      </a>
    );
  }
});

module.exports = ListItem;
