import {PublicKey, Connection, LAMPORTS_PER_SOL} from '@solana/web3.js'

export const showBalance = async (address: string) => {
    const publicKey = new PublicKey(address);
    const connection = new Connection("https://api.devnet.solana.com", "confirmed"); 
    const response = await connection.getAccountInfo(publicKey);

    if (response)
    return response?.lamports
    else
    return `No Account found with this ${address}`;
}