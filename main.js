import {airDropSolana} from './dist/webBackend/index.js'

document.getElementById("submitButton1").addEventListener("click", drop);

async function drop() {
    let address = document.querySelector("#address")
    let count = document.querySelector("#count")
    let message = document.querySelector("#result");

    const response = await airDropSolana(address, count);

    message.innerHTML=response;
}
