import C from '../../constants';
import F from '../../flavors';
import { removeScoop } from '../index';

describe("Remove scoop", () => {
    it("should contain the right action type", () => {
        const action = removeScoop();
        expect(action.type).toEqual(C.REMOVE_SCOOP);
    })

    it("should have a name in payload", () => {
        const action = removeScoop(F.CHOCOLATE);
        console.log(action)
        expect(action.payload).toEqual(F.CHOCOLATE);
    })
})