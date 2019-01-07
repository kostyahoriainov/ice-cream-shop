import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import C from '../../constants';
import { fetchEmployess } from '../index'

describe("Fetch employees", () => {
    it("should dispatch REQUEST action when action is dispached", () => {
        const spy = jest.fn();
        const thunk = fetchEmployess();

        thunk(spy);

        expect(spy.mock.calls[0][0]).toEqual({
            type: C.FETCH_EMPLOYESS_REQUEST
        })
    })

    it("should dispatch the SUCCESS action when the data is fetching successfully", () => {
        const fakeData = [1,2,3];
        const mockAxios = new MockAdapter(axios);

        mockAxios.onGet('/data/employees.json')
            .reply(200, fakeData);

        const spy = jest.fn();
        const thunk = fetchEmployess();

        thunk(spy).then(function(){
            expect(spy.mock.calls[1][0]).toEqual({
                type: C.FETCH_EMPLOYESS_SUCCESS,
                payload: fakeData
            })
        });
    })
})