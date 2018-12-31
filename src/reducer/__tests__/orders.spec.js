import C from '../../constants';
import F from '../../flavors';
import order from '../order';
import { placeOrder } from '../../AC';

describe("order reducer", () => {
    it("should store the temperature in the state", () => {
        const flavor = {
            [F.CHOCOLATE] : 10
        }
        const newState = order(undefined, placeOrder("Petro", 30 - 12 - 2018, null, flavor, 'pending'));
        expect(newState[0].customerName).toEqual("Petro");
        expect(newState[0].createdAt).toEqual(30 - 12 - 2018);
        expect(newState[0].cone).toEqual(true);
    })

   

})