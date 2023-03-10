// Greeter deployed to: 0x59FbE4b130Ef6AF2cf2888f67FCA7622283B0934

const hre = require("hardhat")

async function main() {
	const Greeter = await hre.ethers.getContractFactory("Greeter")
	const greeter = await Greeter.deploy("Hello, Hardhat")
	await greeter.deployed()

	console.log("Greeter deployed to:", greeter.address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exitCode = 1
	})
