var stylus = require('stylus'),
    nodes = stylus.nodes,
    utils = stylus.utils,
    path = require('path');

exports = module.exports = plugin;

exports.version = require(path.join(__dirname, '../package.json')).version;
exports.path = __dirname;

function plugin() {
  return function(style) {
    style.include(__dirname);
  };
}
