import C from '../../constants';
import F from '../../flavors';
import { placeOrder } from '../index';

describe("Place order", () => {
    it("should contain the rigth action type", () => {
        const action = placeOrder();
        expect(action.type).toEqual(C.PLACE_ORDER);
    })

    it("should have a right props in payload", () => {
        const flavor = {
            [F.VANILLA] : 5 
        }
        const action = placeOrder("Petro", 30-12-2018, false, flavor, 'pending');
        expect(action.payload.customerName).toEqual("Petro");
        expect(action.payload.createdAt).toEqual(30-12-2018);
        expect(action.payload.cone).toEqual(false);
        expect(action.payload.status).toEqual('pending');
    })


})