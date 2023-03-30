import {airdrop} from "../airdrop_sol/index.js"

export const airDropSolana =  async (address: HTMLInputElement, count: HTMLInputElement) => {
    
    if(address == null || count == null){
        return 'Enter both address and count'
    }
    let response: string = await airdrop(address.value, +count.value);
    response = await Promise.resolve(response)

    return response

}