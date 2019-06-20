/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let dp = new Array(word1.length + 1).fill(null).map(() => new Array(word2.length + 1).fill(0));
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, word1[i - 1] === word2[j - 1] ? dp[i - 1][j - 1] : dp[i - 1][j - 1] + 2);
    }
  }
  return  dp[dp.length - 1][dp[0].length - 1];
};