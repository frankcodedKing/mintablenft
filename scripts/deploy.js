const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const base_uri = 'https://ipfs.io/ipfs/QmY86YA9G13BiJcmY6cLCakkUBTge8yCCzmVbLhGg2vj4e/'
  const Contract = await ethers.getContractFactory('Mintable')
  const contract = await Contract.deploy('Mintable NFT', 'MTBL', base_uri)

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => { 
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})