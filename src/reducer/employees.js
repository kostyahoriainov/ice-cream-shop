import C from '../constants';

const defaultState = {
    data: [],
    error: null,
    loading: false
}

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case C.FETCH_EMPLOYESS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case C.FETCH_EMPLOYESS_SUCCESS:
            return {...state,
                data: payload,
                loading: false
            }
        case C.FETCH_EMPLOYESS_FAILURE:
            return {...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}