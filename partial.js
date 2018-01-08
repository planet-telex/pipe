let _ = require('./_');
/**
* @function partial :: any, any, ... -> partially applied fn || executed fn on params
* partially apply arguments until all are received; then return application
*/
module.exports = function() {
  let a = _.args(arguments);
  let f = a.splice(0, 1)[0];
  if (typeof f !== 'function') {
    throw new TypeError('first argument to partial must be a function');
  }
  function again(oldArgs) {
    return function() {
      let ags = oldArgs.concat(_.args(arguments));
      return ags.length >= f.length ? f.apply(this, ags) : again(ags);
    };
  };
  return a.length >= f.length ? f.apply(this, a) : again(a);
}
