import C from '../constants';
import F from '../flavors';

const defaultState = {
    temperature: null,
    flavors: {
        [F.VANILLA]: 20,
        [F.CHOCOLATE]: 22
    }
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case C.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: payload
            }
        case C.REMOVE_SCOOP:
            const decreaseAmount = state.flavors[payload] - 1;
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [payload]: Math.max(decreaseAmount, 0)
                }
            }
        case C.ADD_PRODUCT_TO_FREEZER: 
            const amount = (state.flavors[payload.name] || 0) + payload.amount
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [payload.name]: Math.min(amount, 60)
                }
            }
        default:
            return state
    }
}