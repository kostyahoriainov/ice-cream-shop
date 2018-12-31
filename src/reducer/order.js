/* eslint-disable no-case-declarations */
import C from '../constants';

// const defaultState = [{
//     customerName: null,
//     createdAt: null,
//     cone: null,
//     scoobs: {

//     },
//     status: null
// }]

export default (state = [], action) => {
    const { type, payload } = action;
    switch(type) {
        case C.PLACE_ORDER:
            const time = new Date();
            const createdAt = payload.createdAt || time.toLocaleDateString();
            const cone = payload.cone || true;
            const newState = [...state];
            newState.push({
                customerName: payload.customerName,
                createdAt,
                cone,
                scoobs: payload.scoobs,
                status: payload.status
            });
            return newState

        default:
            return state
    }

} 