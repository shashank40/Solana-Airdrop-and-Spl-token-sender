var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PublicKey, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { showBalance } from '../fetch_balance/index.js';
export const airdrop = (address, amount) => __awaiter(void 0, void 0, void 0, function* () {
    if (address == null || amount == null)
        return 'Enter both address and amount';
    let response;
    try {
        const publicKey = new PublicKey(address);
        const connection = new Connection("https://api.devnet.solana.com", "confirmed");
        if (!connection || connection == null)
            return `No Account found with this ${address}`;
        const signature = yield connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
        const latestBlockHash = yield connection.getLatestBlockhash();
        yield connection.confirmTransaction({ blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: signature });
        response = yield showBalance(address);
    }
    catch (error) {
        response = error.message + '1';
    }
    return response;
});
//# sourceMappingURL=index.js.map