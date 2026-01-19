const ethers = require('ethers');

// Helper to validate if a string is a valid hex prefix
function isValidHex(input) {
    const re = /^[0-9A-Fa-f]+$/g;
    return re.test(input);
}

// Helper to estimate time to find a vanity address
function estimateTime(prefixLength, speed) {
    // Probability is 16^L
    const combinations = Math.pow(16, prefixLength);
    const seconds = combinations / speed;
    return seconds;
}

module.exports = { isValidHex, estimateTime };
