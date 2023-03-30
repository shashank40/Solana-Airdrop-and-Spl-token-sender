import * as web3 from '@solana/web3.js';

import {showBalance} from '../fetch_balance/index.js';

export const airdrop = async (address : string, amount: number) => {
    if(address==null || amount==null)
        return 'Enter both address and amount';
    let response: string;

    try{

        const publicKey = new (web3).PublicKey(address);
        const connection = new (web3).Connection("https://api.devnet.solana.com", "confirmed");

        if(!connection || connection==null)
        return `No Account found with this ${address}`

        const signature = await connection.requestAirdrop(publicKey, amount*(web3).LAMPORTS_PER_SOL);
        const latestBlockHash = await connection.getLatestBlockhash();

        await connection.confirmTransaction({blockhash:latestBlockHash.blockhash, 
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
             signature: signature});
        
     response = await showBalance(address);
    }
    catch(error){
        response = error.message + '1';
    }
    
    return response;
    
}