import C from '../../constants';
import { updateTemperature } from '../index';

describe("update temperature", () => {
    it("should contain the rigth action type", () => {
        const action = updateTemperature();
        expect(action.type).toEqual(C.UPDATE_TEMPERATURE);
    })

    it("should contain the temperature in the payload", () => {
        const action = updateTemperature(10);
        expect(action.payload).toEqual(10);
    })
})