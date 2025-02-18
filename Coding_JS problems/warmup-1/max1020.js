function maxInRange1020(a, b) {
    let max = 0; // Initialize the result to 0

    // Check if 'a' is in the range 10..20
    if (a >= 10 && a <= 20) {
        max = a; // Update max to 'a'
    }

    // Check if 'b' is in the range 10..20 and greater than current max
    if (b >= 10 && b <= 20) {
        if (b > max) {
            max = b; // Update max to 'b' if it's larger
        }
    }

    return max; // Return the larger value or 0 if neither is in range
}