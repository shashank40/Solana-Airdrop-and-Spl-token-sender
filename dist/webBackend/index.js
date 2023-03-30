var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { airdrop } from "../airdrop_sol/index.js";
export const airDropSolana = (address, count) => __awaiter(void 0, void 0, void 0, function* () {
    if (address == null || count == null) {
        return 'Enter both address and count';
    }
    let response = yield airdrop(address.value, +count.value);
    response = yield Promise.resolve(response);
    return response;
});
//# sourceMappingURL=index.js.map