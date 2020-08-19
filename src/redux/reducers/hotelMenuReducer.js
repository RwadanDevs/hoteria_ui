import { GET_HOTEL_MENU } from '../actions/actionTypes';

const initialState = {
    loading: false,
    hotelMenu: {  },
    error: null
  };

export default (state = initialState, action)=>{
  switch (action.type) {
      case `${GET_HOTEL_MENU}_PENDING`: 
          return  { ...state, error:null, loading: true };

      case `${GET_HOTEL_MENU}_FULFILLED`:
           return  { ...state,
             loading:false, 
             hotelMenu: action.payload, 
             error:null 
           };
          
      case `${GET_HOTEL_MENU}_REJECTED`:
          return  { ...state, loading:false, error:`${action.payload }`};
          
      default:
          return state;
  }
};
