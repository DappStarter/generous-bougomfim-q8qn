require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain evil install derive swap snap'; 
let testAccounts = [
"0x3648f48c87058fdeb4ebb91f272007b638defd49b1ac90ddd011fb079746fc98",
"0xb5aa7991ff2cb6650b9090565dbbe1497b1a89a58b1f4600f2c8f5cf4e70fbd9",
"0xd62ce42690ebb532e9100a0684ec5e526bc9455cb6ff8eb155a211c2354934ff",
"0x396086644ae7afa1de8f7c5576eb2300a9803c474dfb6b26ec3d834af47b403b",
"0xe94d860ebbb1b5c5a6a22d2955644c12d0091fb15713421d89e6fe2fabc00487",
"0x66d6329796573f140d4968ff9a99fde75ff8d056f5bf375982170139aac0e4bf",
"0x25c85e3e6bd3ea7e6ad27842cb95908c464bf850ec7874b1c10db47ab82a4a47",
"0x75e18d55a63bb6ea66f537f031f5c17ee30436d32f24ce1bbeffe8e2bc7b13bf",
"0x76c7a11fe04ef73f608adf7d63664290f331c7a951780c8db6e3f704e57741c2",
"0x092765e3a59ed73e9c2a8ab699bd2e48f8baea98a3780ae5b671bba86ff3a236"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


