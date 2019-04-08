const { repair } = require('./enhancer.js');
// test away!

describe('enhancers', () => {
  describe('repair function', () => {
    it('should restore the durability of an item to 100', () => {
      const originalItem = {
        name: 'sword',
        durability: 43,
        enhancement: 15,
      };
      const expected = {
        name: 'sword',
        durability: 100,
        enhancement: 15,
      };
      const actual = repair(originalItem);
      expect(actual).toEqual(expected);
    });
  });
});
