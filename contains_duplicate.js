var containsDuplicate = function(nums) {
    const numbers = []

    for(let n of nums) {
        if (numbers.includes(n)) {
            return true
        } else {
            numbers.push(n)
        }
    }

    return false
};
