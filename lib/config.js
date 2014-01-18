var optimist = require('optimist');
var _        = require('lodash');

var config = _.defaults({}, {
  'port'     : 3000,
  'app-name' : 'Nub',
  'thru'     : true 
});

module.exports.get = function(opt) {
  if(!opt) return;
  opt = opt.toLowerCase();
  if(!config[opt]) return;
  return config[opt];
}

module.exports.set = function(key, val) {
  config[key] = val;
}