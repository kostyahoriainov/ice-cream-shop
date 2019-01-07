import order from '../order'
import {cancelOrder, fullFillOrder, payForOrder} from '../../AC'

describe("Order reducer", () => {
    it("should mark a giver order as fullfielled", () => {
        const existingState = [{
            customerName: 'Vasya',
            status: 'pending',
            id: 1
        }];
        const newState = order(existingState, fullFillOrder(1));
        expect(newState[0].status).toEqual('fullfilled')
    })

    it("should mark a giver order as paid", () => {
        const existingState = [{
            customerName: 'Vasya',
            status: 'fullfilled',
            id: 1
        }];
        const newState = order(existingState, payForOrder(1));
        expect(newState[0].status).toEqual('paid')
    })

    it("should mark a giver order as cancelled", () => {
        const existingState = [{
            customerName: 'Vasya',
            status: 'paid',
            id: 1
        }];
        const newState = order(existingState, cancelOrder(1));
        expect(newState).toEqual([])
    })


})