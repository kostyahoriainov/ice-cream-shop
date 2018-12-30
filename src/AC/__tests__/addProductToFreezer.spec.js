import C from '../../constants';
import F from '../../flavors';
import { addProductToFreezer } from '../index';

describe("Add product to freezer", () => {
    it("should contain the rigth action type", () => {
        const action = addProductToFreezer();
        expect(action.type).toEqual(C.ADD_PRODUCT_TO_FREEZER);
    })

    it("should have a name and amount in payload", () => {
        const action = addProductToFreezer(F.CHOCOLATE, 5);
        expect(action.payload.name).toEqual(F.CHOCOLATE);
        expect(action.payload.amount).toEqual(5);
    })

})