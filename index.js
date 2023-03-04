function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (let num of array) {
    const difference = target - num;
    if (seenNumbers.has(difference)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  - O(n) time complexity
*/

/* 
  Add your pseudocode here
  - Create a new Set called seenNumbers
  - For each number num in the input array:
    - Calculate the difference between the target and num
    - If difference is in seenNumbers, return true
    - Otherwise, add num to seenNumbers
  - If we get through the whole array without finding a pair, return false
*/

/*
  Add written explanation of your solution here
  - We can use a Set to keep track of the numbers we've seen so far in the array as we iterate through it to find a pair that sums to the target.
  - We can calculate the difference between the target and the current number, and check if that difference is in the Set.
  - If it is, we've found a pair that sums to the target, so we can return true.
  - If it isn't, we add the current number to the Set and move on to the next number in the array.
  - If we get through the whole array without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
