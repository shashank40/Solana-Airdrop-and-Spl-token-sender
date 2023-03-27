import {airdrop} from '../airdrop_sol/index'

export const airDropSolana = async () => {
    let address = document.querySelector("#address") as HTMLInputElement | null;
    let count = document.querySelector("#count")as HTMLInputElement | null;
    let message = document.querySelector("#result");
    
    if(address == null || count == null){
        message.innerHTML = 'Enter both address and count'
    }


    let response = await airdrop(address.value, +count.value);
    message.innerHTML = response

}