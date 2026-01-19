const chalk = require('chalk');

function logStats(count, startTime) {
    const duration = (Date.now() - startTime) / 1000;
    const speed = Math.floor(count / duration);
    
    // Overwrite current line
    process.stdout.write(`\r[Running] Scanned: ${count} | Speed: ${speed} addr/sec`);
}

function logSuccess(wallet) {
    console.log('\n');
    console.log(chalk.green.bold('================ MATCH FOUND ================'));
    console.log(chalk.yellow(`Address:     ${wallet.address}`));
    console.log(chalk.gray(`Private Key: ${wallet.privateKey}`));
    console.log(chalk.cyan(`Mnemonic:    ${wallet.mnemonic}`));
    console.log(chalk.green.bold('============================================='));
}

module.exports = { logStats, logSuccess };
