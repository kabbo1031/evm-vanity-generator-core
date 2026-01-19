/**
 * Validates if the address matches the vanity criteria
 */
function checkMatch(address, config) {
    // Remove '0x' for comparison
    const cleanAddress = address.substring(2);
    
    let isMatch = true;

    // Check Prefix
    if (config.TARGET_PREFIX) {
        const prefix = config.CASE_SENSITIVE 
            ? config.TARGET_PREFIX 
            : config.TARGET_PREFIX.toLowerCase();
            
        const addrStart = config.CASE_SENSITIVE 
            ? cleanAddress 
            : cleanAddress.toLowerCase();

        if (!addrStart.startsWith(prefix)) isMatch = false;
    }

    // Check Suffix (if defined)
    if (isMatch && config.TARGET_SUFFIX) {
        const suffix = config.CASE_SENSITIVE 
            ? config.TARGET_SUFFIX 
            : config.TARGET_SUFFIX.toLowerCase();

        const addrEnd = config.CASE_SENSITIVE 
            ? cleanAddress 
            : cleanAddress.toLowerCase();

        if (!addrEnd.endsWith(suffix)) isMatch = false;
    }

    return isMatch;
}

module.exports = { checkMatch };
