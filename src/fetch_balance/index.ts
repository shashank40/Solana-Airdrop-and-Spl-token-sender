import * as web3 from '@solana/web3.js';

export const showBalance = async (address: string) => {
    const {PublicKey, Connection, LAMPORTS_PER_SOL} = web3
    if(address==null)
    return 'Enter an address to continue'

    let response;

    try{
    const publicKey= new PublicKey(address);
    const connection = new Connection("https://api.devnet.solana.com", "confirmed"); 
    response = await connection.getAccountInfo(publicKey);
    }
    catch(error){
        return error.message;
    }

    if (response)
    return "You have devenet solana count = " + response?.lamports/LAMPORTS_PER_SOL;
    else
    return `No Account found with this ${address}`;
}