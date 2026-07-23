class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sets = new Set(nums)
        return nums.length != sets.size 
    }
}
