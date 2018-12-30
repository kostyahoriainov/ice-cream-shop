import C from '../../constants';
import { placeOrder } from '../index';

describe("Add product to freezer", () => {
    it("should contain the rigth action type", () => {
        const action = placeOrder();
        expect(action.type).toEqual(C.PLACE_ORDER);
    })


})