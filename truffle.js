var HDWalletProvider = require("truffle-hdwallet-provider");

let mnemonic = "";
let infura_apikey = "";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey);
            },
            network_id: 3,
            gas: 4600000
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/" + infura_apikey);
            },
            network_id: 1,
            gas: 4600000
        },
        gotest: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://testnet-rpc.gochain.io:443");
            },
            network_id: "*",
            gas: 4600000
        },
        gomain: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rpc.gochain.io:443");
            },
            network_id: "*",
            gas: 4600000
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    migrations_directory: './migrations'
};
