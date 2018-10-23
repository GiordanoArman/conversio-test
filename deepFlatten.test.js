const deepFlatten = require('./deepFlatten');

describe(`deepFlatten`, () => {
  test(
    `should return [1, 2, 3] if passed [1, 2, 3] as first parameter`, 
    () => {
      expect(deepFlatten([1, 2, 3])).toEqual([1, 2, 3]);
    }
  );

  const input = [[1], [2, [3, 4]], [[[5], 6], 7, [[[[8]]]], 9], [10], [11]];
  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  test(
    `should return ${JSON.stringify(output)} array when passed ` +
    `${JSON.stringify(input)} as first parameter`,
    
    () => {
      expect(deepFlatten(input)).toEqual(output);
    }
  );
});
