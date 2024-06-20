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
};

var canJump = function (nums) {
  if (nums.length === 0) return false;
  if (nums[0] === 0 && nums.length > 1) return false;

  let reachable = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (i > reachable) {
      return false;
    }
    if (i + nums[i] > reachable) {
      reachable = i + nums[i];
    }
  }

  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
