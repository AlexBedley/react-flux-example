var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
  updateList: function(items) {
    AppDispatcher.dispatch({
      actionType: 'updateList',
      items: items
    });
  },
  
  filter: function(filterValue) {
    AppDispatcher.dispatch({
      actionType: 'filter',
      filterValue: filterValue
    });
  }
};

module.exports = AppActions;
