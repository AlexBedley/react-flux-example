var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('superagent');
var Promise = require('lie');

var CHANGE_EVENT = 'change';

var _items = [];
var _currentItems = [];

// init
request
  .get('http://api.tvmaze.com/schedule')
  .end(function(err, res) {
    AppActions.updateList(res.body.map(function(item) {
      return {
        name: item.show.name,
        network: item.show.network.name,
        airtime: item.airtime
      };
    }));
  });
  
function filterItems(filterValue) {
  return _items.filter(function(item) {
    return ~item.name.toLowerCase().indexOf(filterValue);
  });
}

var AppStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _currentItems;
  },
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  if (action.actionType === 'updateList') {
    _items = action.items;
    _currentItems = _items;
    AppStore.emitChange();
  } else if (action.actionType === 'filter') {
    if (action.filterValue) {
      _currentItems = filterItems(action.filterValue.toLowerCase());
    } else {
      _currentItems = _items;
    }
    AppStore.emitChange();
  }
  
});

module.exports = AppStore;
