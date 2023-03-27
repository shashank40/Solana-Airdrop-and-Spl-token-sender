import {PublicKey, Connection, LAMPORTS_PER_SOL} from '@solana/web3.js'
import {showBalance} from '../fetch_balance/index'

export const airdrop = async (address : string, amount: number) => {
    const publicKey = new PublicKey(address);
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    if(!connection || connection==null)
    return `No Account found with this ${address}`

    const signature = await connection.requestAirdrop(publicKey, amount*LAMPORTS_PER_SOL);
    const latestBlockHash = await connection.getLatestBlockhash();

    await connection.confirmTransaction({blockhash:latestBlockHash.blockhash, 
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
         signature: signature});
    
}