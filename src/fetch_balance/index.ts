import * as web3 from '@solana/web3.js';

export const showBalance = async (address: string) => {
    if(address==null)
    return 'Enter an address to continue'

    let response;

    try{
    const publicKey= new (web3).PublicKey(address);
    const connection = new (web3).Connection("https://api.devnet.solana.com", "confirmed"); 
    response = await connection.getAccountInfo(publicKey);
    }
    catch(error){
        return error.message;
    }

    if (response)
    return "You have devenet solana count = " + response?.lamports/(web3).LAMPORTS_PER_SOL;
    else
    return `No Account found with this ${address}`;
}