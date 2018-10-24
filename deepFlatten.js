// full project at https://github.com/GiordanoArman/conversio-test

function deepFlatten(array) {
  const elems = [];
  array.forEach((elem) => {
    if (elem instanceof Array) {
      elems.push(...deepFlatten(elem));
    } else {
      elems.push(elem);
    }
  });
  return elems;
}
module.exports = deepFlatten;