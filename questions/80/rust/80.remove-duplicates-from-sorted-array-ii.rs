impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let n = nums.len();
        if n <= 2 {
            return n as i32;
        }
        let (mut left, mut right) = (2, 2);
        while right < n {
            if nums[left - 2] != nums[right] {
                nums[left] = nums[right];
                left += 1;
            }
            right += 1;
        }
        return left as i32;
    }
}