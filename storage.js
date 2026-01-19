const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'found_wallets.json');

function saveWallet(wallet) {
    let data = [];
    
    // Load existing data if file exists
    if (fs.existsSync(FILE_PATH)) {
        try {
            const fileContent = fs.readFileSync(FILE_PATH);
            data = JSON.parse(fileContent);
        } catch (e) {
            // File might be empty or corrupt, start fresh
        }
    }

    // Add new wallet (timestamped)
    data.push({
        ...wallet,
        timestamp: new Date().toISOString()
    });

    // Write back to file
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

module.exports = { saveWallet };
