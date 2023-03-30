var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as web3 from '@solana/web3.js';
export const showBalance = (address) => __awaiter(void 0, void 0, void 0, function* () {
    if (address == null)
        return 'Enter an address to continue';
    let response;
    try {
        const publicKey = new (web3).PublicKey(address);
        const connection = new (web3).Connection("https://api.devnet.solana.com", "confirmed");
        response = yield connection.getAccountInfo(publicKey);
    }
    catch (error) {
        return error.message;
    }
    if (response)
        return "You have devenet solana count = " + (response === null || response === void 0 ? void 0 : response.lamports) / (web3).LAMPORTS_PER_SOL;
    else
        return `No Account found with this ${address}`;
});
//# sourceMappingURL=index.js.map