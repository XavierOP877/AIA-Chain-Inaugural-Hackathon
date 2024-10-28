// checkGas.js
const { ethers } = require("hardhat");

async function checkGasPrice() {
    try {
        // Create a provider instance
        const provider = new ethers.providers.JsonRpcProvider('https://aia-dataseed1-testnet.aiachain.org');
        
        // Get current gas price
        const gasPrice = await provider.getGasPrice();
        console.log(`Current gas price: ${ethers.utils.formatUnits(gasPrice, 'gwei')} gwei`);
        console.log(`Raw gas price value: ${gasPrice.toString()} wei`);
        
        // Get latest block
        const block = await provider.getBlock("latest");
        console.log("\nLatest block info:");
        console.log(`Block number: ${block.number}`);
        console.log(`Base fee per gas: ${block.baseFeePerGas ? ethers.utils.formatUnits(block.baseFeePerGas, 'gwei') + ' gwei' : 'Not available'}`);
        
        // Try to get network configuration
        const network = await provider.getNetwork();
        console.log("\nNetwork info:");
        console.log(`Chain ID: ${network.chainId}`);
        console.log(`Network name: ${network.name}`);
        
    } catch (error) {
        console.error("Error checking gas price:", error);
    }
}

// Execute the function
checkGasPrice()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });