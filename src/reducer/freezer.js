import C from '../constants';

const defaultState = {
    temperature: null,
    flavors: {}
}

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case C.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: payload
            }
        case C.ADD_PRODUCT_TO_FREEZER:
            const amount = (state.flavors[payload.name] || 0) + payload.amount
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [payload.name]: Math.min(amount, 100)
                }
            }
        default:
            return state
    }

} 