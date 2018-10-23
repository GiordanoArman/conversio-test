function deepFlatten(array) {
  let elems = [];
  array.forEach((elem) => {
    if (elem instanceof Array) {
      elems = [...elems, ...deepFlatten(elem)];
    } else {
      elems.push(elem);
    }
  });
  return elems;
}
module.exports = deepFlatten;