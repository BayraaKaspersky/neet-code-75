class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        for(let i = 0 ; i<nums.length ; i++) {
            let r = 1 
            for(let j = 0; j<nums.length ; j++) {
                if(i!==j) {
                    r*=nums[j]
                }
            }
            result.push(r)
        }
     return result
    }
}