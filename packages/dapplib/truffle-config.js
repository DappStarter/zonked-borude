require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift raise saddle exchange good civil army gesture'; 
let testAccounts = [
"0xd2f3e5237be0ea7d75b7b6e3b2c556d0628ff45b2a6fe2c3b65748f687eb76e3",
"0xa72270788a7d785700b85cde6e180ea0ffa35a62cf4ee152e6b8b02d21f6d2b9",
"0x3487017f3e3f402bb80defdc548d41555670dfb5f8d49c5f0e445cf451f122c6",
"0x4c7e07aa2cdb85fe77c583c70e4b02a713b4a9ad0568d09955c4248960a31d51",
"0x30daa816cdac25afb41af2ebf044197284ed87e93af483ecaa7f9a7fdee34254",
"0x5d15268c307270efaf4aeebe531e60199bd201dd5d1ec0dc277e18e23b225226",
"0x8a075abe2637b2329a500151c5e7bc557f2820548f9b5b165b2aaae1661e6e9e",
"0x63aa49e3a84310af2f9edc96def03eec175b1ae4a95518e5e7ce8669b36352a9",
"0x3f0ac131d37e22539ef3b7f3e557727ebb8e597c5cfcd623552a4dc640ba54c5",
"0xcb99835171d4ca8f4d67af60980722b2fa255bd517472aea197415a72796e72f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
