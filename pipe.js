let _ = require('./_');

/**
* @function pipe :: function, function, ... -> function
* create a pipeline of functions that compose operations on a single parameter
*/

module.exports = function() {
  let fs = _.args(arguments);
  function caller(fs, acc) {
    return fs.length === 0 ? acc
      : caller(_.rest(fs), _.first(fs)(acc));
  };
  return data => caller(_.rest(fs), _.first(fs)(data));
};
