class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = new Map()
        for(let num of nums) {
            hashMap[num] =  (hashMap[num] || 0 ) + 1
        }
        const arr = Object.entries(hashMap)
        arr.sort((a, b) => b[1] - a[1])
        return arr.slice(0 , k).map(item => Number(item[0]))
    }
}
