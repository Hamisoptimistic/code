function startOz(str) {
    // Check if the first two characters are 'oz'
    if (str.substring(0, 2) === 'oz') {
        return 'oz';
    }
    // Check if the first character is 'o'
    else if (str[0] === 'o') {
        return str[0];
    }
    // Check if the second character is 'z'
    else if (str[1] === 'z') {
        return str[1];
    }
    // If none of the above conditions are met, return an empty string
    else {
        return '';
    }
}