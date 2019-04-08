const { repair, succeed } = require('./enhancer.js');
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

  describe('succeed function', () => {
    it('should increase the item\'s enhancement by 1', () => {
      const originalItem = {
        name: 'sword',
        durability: 90,
        enhancement: 14,
      };
      const expected = {
        name: 'sword',
        durability: 90,
        enhancement: 15,
      };
      const actual = succeed(originalItem);
      expect(actual).toEqual(expected);
    });
    it('should not change the enhancement level if the enhancement level is 20', () => {
      const originalItem = {
        name: 'sword',
        durability: 70,
        enhancement: 20,
      };
      const expected = {
        name: 'sword',
        durability: 70,
        enhancement: 20,
      };
      const actual = succeed(originalItem);
      expect(actual).toEqual(expected);
    });
    it('should not change the durability of the item', () => {
      const originalItem = {
        name: 'sword',
        durability: 70,
        enhancement: 20,
      };
      const expected = {
        name: 'sword',
        durability: 70,
        enhancement: 20,
      };
      const actual = succeed(originalItem);
      expect(actual).toEqual(expected);
    })
  });
});
