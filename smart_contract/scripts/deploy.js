const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Transactions = await ethers.getContractFactory("Transactions");
  const gasPrice = ethers.utils.parseUnits('15000', 'gwei'); 

  console.log("Deploying Transaction contract...");
  const transactions = await Transactions.deploy({
    gasPrice: gasPrice,
  });

  console.log("Waiting for deployment transaction to be mined...");
  await transactions.deployed();
  console.log("Transactions contract deployed to:", await transactions.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
