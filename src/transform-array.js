module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    let transformed = [];

    for (let i = 0; i < arr.length; i++) {
    
        if (arr[i] === '--discard-next') {
            if (i < arr.length - 1) {
                i++;
            }
            continue;
        } else if (arr[i] === '--discard-prev') {
            if (i > 0) {
                transformed.pop();
            }
            continue;
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                transformed.push(arr[i - 1]);
            }
            continue;
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                transformed.push(arr[i + 1]);
            }
            continue;
        }
        transformed.push(arr[i]);
    
    }
return transformed;
};
