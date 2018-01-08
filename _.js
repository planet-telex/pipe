let addHash = x => '#' + x;

let addThreeVals = (x, y, z) => x + y + z;

let args = function(args) {
  return Array.prototype.slice.call(args)
}

let find = (k, v, os) => os.filter(o => o[k] === v)

let first = xs => xs[0]

let propEq = (k, o) => o[k]

let rest = xs => xs.slice(1)

let subThreeVals = (x, y, z) => x - y - z

let upp = x => x.toUpperCase()

module.exports = {
  addHash,
  addThreeVals,
  args,
  find,
  first,
  propEq,
  rest,
  subThreeVals,
  upp
};
