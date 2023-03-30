const { exec } = require('child_process');
import * as web3 from "@solana/web3.js";
export function loadWalletKey(keypairFile) {
    const fs = require("fs");
    const loaded = web3.Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())));
    return loaded;
}
function send_token() {
    exec('solana config set --url https://api.devnet.solana.com', (err, stdout, stderr) => {
        console.log(stdout);
    });
    const myKeypair = loadWalletKey("path/to/wallet/json").publicKey;
    const command = 'spl-token transfer ///mintaddress ///countOfTokens ' + myKeypair + ' --allow-unfunded-recipient --fund-recipient';
    exec(command, (err, stdout, stderr) => {
        console.log(stdout);
    });
}
send_token();
//# sourceMappingURL=index.js.map