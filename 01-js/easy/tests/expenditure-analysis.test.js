const calculateTotalSpentByCategory = require('../expenditure-analysis');

describe('calculateTotalSpentByCategory', () => {
  it('should return an array of objects with total spending by category', () => {
    const transactions = [
      { itemName: 'Item1', category: 'Category1', price: 10, timestamp: '2023-09-16' },
      { itemName: 'Item2', category: 'Category2', price: 20, timestamp: '2023-09-16' },
      { itemName: 'Item3', category: 'Category1', price: 5, timestamp: '2023-09-16' },
      { itemName: 'Item4', category: 'Category2', price: 15, timestamp: '2023-09-16' },
      { itemName: 'Item5', category: 'Category3', price: 8, timestamp: '2023-09-16' },
    ];

    const result = calculateTotalSpentByCategory(transactions);

    expect(result).toEqual([
      { Category1: 15 },
      { Category2: 35 },
      { Category3: 8 },
    ]);
  });

  it('should return an empty array if there are no transactions', () => {
    const transactions = [];

    const result = calculateTotalSpentByCategory(transactions);

    expect(result).toEqual([]);
  });
});
