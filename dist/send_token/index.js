"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWalletKey = void 0;
var exec = require('child_process').exec;
var web3 = require("@solana/web3.js");
function loadWalletKey(keypairFile) {
    var fs = require("fs");
    var loaded = web3.Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())));
    return loaded;
}
exports.loadWalletKey = loadWalletKey;
function send_token() {
    exec('solana config set --url https://api.devnet.solana.com', function (err, stdout, stderr) {
        console.log(stdout);
    });
    var myKeypair = loadWalletKey("path/to/wallet/json").publicKey;
    var command = 'spl-token transfer ///mintaddress ///countOfTokens ' + myKeypair + ' --allow-unfunded-recipient --fund-recipient';
    exec(command, function (err, stdout, stderr) {
        console.log(stdout);
    });
}
send_token();
