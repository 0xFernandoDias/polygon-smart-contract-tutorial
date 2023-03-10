const hre = require("hardhat")
const ContractJson = require("../artifacts/contracts/Greeter.sol/Greeter.json")

const abi = ContractJson.abi

async function main() {
	const alchemy = new hre.ethers.providers.AlchemyProvider(
		"maticmum",
		process.env.ALCHEMY_API_KEY
	)

	const userWallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, alchemy)

	const Greeter = new hre.ethers.Contract(
		process.env.CONTRACT_ADDRESS,
		abi,
		userWallet
	)

	const setTxt1 = await Greeter.setGreeting("Hello Fernando")
	await setTxt1.wait()
	console.log("Before: " + (await Greeter.greet()))

	const setTxt2 = await Greeter.setGreeting("Hello Fernando 2")
	await setTxt2.wait()
	console.log("After: " + (await Greeter.greet()))
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exitCode = 1
	})
