// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import hotelMenuReducer from './hotelMenuReducer.js';


export default combineReducers({
    hotelMenu: hotelMenuReducer,
});
