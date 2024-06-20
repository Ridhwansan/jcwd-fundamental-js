var canJump = function (nums) {
  if (nums.length === 0) return false;
  if (nums.length[0] === 0 && nums.length > 1) return false;

  let reachJump = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (i > reachJump) {
      return false;
    }
    if (i + nums[i] > reachJump) {
      reachJump = i + nums[i];
    }
  }
  return true;
};

console.log(canJump([1, 2, 1, 1, 4]));

const { data } = require("../materi/day13");
console.log(data);
