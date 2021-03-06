/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let nums = [];
  for (let i = 1; i <= n; i++) nums.push(i);
  while (k > 1) {
    nextPermutation(nums);
    k--;
  }
  return nums.join('');
  function nextPermutation(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i - 1] < nums[i]) {
        for (let j = nums.length - 1; j >= i; j--) {
          if (nums[j] > nums[i - 1]) {
            let temp = nums[i - 1];
            nums[i - 1] = nums[j];
            nums[j] = temp;
            break;
          }
        }
        let els = nums.splice(i).sort((a, b) => a - b);
        while(els.length) {
          nums.push(els.shift());
        }
        return;
      }
    }
    let els = nums.splice(0).sort((a, b) => a - b);
    while(els.length) {
      nums.push(els.shift());
    }
  }
};