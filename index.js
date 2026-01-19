const { generateWallet } = require('./generator');
const { checkMatch } = require('./matcher');
const { logStats, logSuccess } = require('./logger');
const config = require('./settings');

let attempts = 0;
const startTime = Date.now();

console.log(`[CORE] Starting search for prefix: 0x${config.TARGET_PREFIX}...`);

// Infinite loop simulation for the worker
async function startMining() {
    while (true) {
        attempts++;
        
        // 1. Generate a random wallet
        const wallet = generateWallet();
        
        // 2. Check if it matches our pattern
        if (checkMatch(wallet.address, config)) {
            logSuccess(wallet);
            if (config.SAVE_TO_FILE) {
                require('./storage').saveWallet(wallet);
            }
            // In a real script we might break or continue searching
        }

        // Log stats every 1000 attempts to keep console clean
        if (attempts % 1000 === 0) {
            logStats(attempts, startTime);
        }
        
        // Tiny delay to prevent blocking the event loop in single thread mode
        if (attempts % 500 === 0) await new Promise(r => setTimeout(r, 1));
    }
}

startMining();
