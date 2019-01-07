import C from '../../constants'
import F from '../../flavors'
import freezer from '../freezer'
import {updateTemperature, addProductToFreezer, removeScoop} from '../../AC'

describe("Freezer reducer", () => {
    it("should store the temperature in the state", () => {
        const newState = freezer(undefined, updateTemperature(10));
        expect(newState.temperature).toEqual(10);
    })

    it("should store product in th state", () => {
        const newState = freezer(undefined, addProductToFreezer(F.CHOCOLATE, 5));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(5);
    })

    it("should add the product in the flavot if it alreadyexists", () => {
        const oldState = {
                flavors: {
                    [F.CHOCOLATE]: 5
                }
        }
        const newState = freezer(oldState, addProductToFreezer(F.CHOCOLATE, 5));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(10);
    })

    
    it("should make sure to overflow the freezer", () => {
        const oldState = {
                flavors: {
                    [F.CHOCOLATE]: 90
                }
        }
        const newState = freezer(oldState, addProductToFreezer(F.CHOCOLATE, 15));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(60);
    })

    it("should remove scoops from the state", () => {
        const oldState = {
            flavors: {
                [F.CHOCOLATE]: 10
            }
        }
        const newState = freezer(oldState, removeScoop(F.CHOCOLATE))
        expect(newState.flavors[F.CHOCOLATE]).toEqual(9)
    })

    it("should make sure not to remove more than 0", () => {
        const oldState = {
            flavors: {
                [F.CHOCOLATE]: 0
            }
        }
        const newState = freezer(oldState, removeScoop(F.CHOCOLATE));
        expect(newState.flavors[F.CHOCOLATE]).toEqual(0)
    })

})