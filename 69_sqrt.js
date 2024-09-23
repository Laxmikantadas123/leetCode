//==========================69_sqrt(x)=================


var mySqrt = function(x) {
    if (x < 2) return x; // Return x directly for 0 and 1

    let start = 1, end = Math.floor(x / 2);
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid; // Perfect square
        } else if (square < x) {
            start = mid + 1; // Search in the right half
        } else {
            end = mid - 1; // Search in the left half
        }
    }
    
    return end; // end is the integer part of sqrt(x)
};
