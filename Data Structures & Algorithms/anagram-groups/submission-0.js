class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {}
        for(let str of strs){
            const key = str.split("").sort().join("")
            if(!hashMap[key]) {
                hashMap[key] = []
            }
            hashMap[key].push(str)
        }
        return Object.values(hashMap)
    }
}
