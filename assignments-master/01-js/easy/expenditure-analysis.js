/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(Transactions) {
  let catTotal= [];

  Transactions.forEach((T) => {
    if(catTotal.hasOwnProperty(T.category)){
      catTotal[T.category] = catTotal[T.category] + T.price;
    }
    else{
      catTotal[T.category] = T.price;
    }
  });
  
//even shorter way
  // Transactions.forEach((T) => {
  //   catTotal.hasOwnProperty(T.category) ? (catTotal[T.category] += T.price) : (catTotal[T.category] = T.price);
  // });

    return catTotal;
  };

module.exports = calculateTotalSpentByCategory;
