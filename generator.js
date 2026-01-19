const { ethers } = require('ethers');

/**
 * Core cryptographic function to create a keypair
 */
function generateWallet() {
    // Create random wallet from entropy
    const wallet = ethers.Wallet.createRandom();

    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    };
}

module.exports = { generateWallet };
