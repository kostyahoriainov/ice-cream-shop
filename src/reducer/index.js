import { combineReducers } from 'redux';

import freezer from './freezer';
import order from './order';

export default combineReducers({
    freezer,
    order
})