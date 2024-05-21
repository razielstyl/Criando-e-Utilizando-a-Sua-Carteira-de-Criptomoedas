
//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir a rede
//bitcoin - rede principal - mainnet
//testnet - rede de teste - tesnet
const network = bitcoin.networks.testnet

//derivação de carteiras HD (hierarquicas ou deterministicas)
const path = `m/49'/1'/0'/0`

//criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

//criando uma conta - par pvt-pub keys (privadas e publicas)
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

//gerar um endereço
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: Node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço: ",btcAddress)
console.log("Chave privada:" ,node.toWIF());
console.log("Seed", mnemonic)
