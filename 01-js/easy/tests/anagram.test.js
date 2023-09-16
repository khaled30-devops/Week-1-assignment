const isAnagram = require('../anagram');

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('evil', 'vile')).toBe(true);
    expect(isAnagram('act', 'cat')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('apple', 'banana')).toBe(false);
    expect(isAnagram('abcd', 'abcde')).toBe(false);
  });

  it('should handle edge cases', () => {
    expect(isAnagram('', '')).toBe(false);
    expect(isAnagram('hello', '')).toBe(false);
  });
});
