const { randomBytes } = require('crypto');

/**
 * Ensures high-quality randomness for key generation
 * Wraps Node.js crypto module
 */
function getSecureEntropy(bytes = 32) {
    return randomBytes(bytes);
}

function validateEntropy(entropy) {
    if (!Buffer.isBuffer(entropy) || entropy.length < 32) {
        throw new Error("Insufficient entropy provided for key generation");
    }
    return true;
}

module.exports = { getSecureEntropy, validateEntropy };
