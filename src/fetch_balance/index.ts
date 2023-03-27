import {PublicKey, Connection, LAMPORTS_PER_SOL} from '@solana/web3.js'

export const showBalance = async (address: string) => {
    const publicKey = new PublicKey(address);
    const connection = new Connection("https://api.devnet.solana.com", "confirmed"); 
    const response = await connection.getAccountInfo(publicKey);

    if (response)
    return "You have devenet solana count = " + response?.lamports/LAMPORTS_PER_SOL;
    else
    return `No Account found with this ${address}`;
}