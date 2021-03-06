const initState = {
    items:[],
    fetchError:null,
    cart:[],
    inSession:false,
    creationSuccess:false,
}

const itemReducer = (state = initState,action) => {
    if(sessionStorage.getItem("cart") !== null && !state.inSession){
        state.cart = JSON.parse(sessionStorage.getItem("cart"));
        state.inSession = true;
    }

    const Action  = action.action;
    switch(action.type){
        case 'GetAllItems_Error':
            return state = {
                ...state,
                fetchError: Action,
            }
        case 'CreateItem_Error':
            return state = {
                ...state,
                fetchError: Action,
            }
        case 'CreateItem_Success':
            return state = {
                ...state,
                fetchError: null,
                creationSuccess:true, 
                items:[...state.items,action]
            }
        case 'DeleteItem_Success':
            return state = {
                ...state,
                items: state.items.filter(item=> item.id !== Action )
            }
        case 'GetAllItems_Success':
            return state = {
                ...state,
                items: Action,
                fetchError:null,
            }
        case 'AddToCart':
            const item = state.items.find(item=> item.id === Action);
            return state = {
                ...state,
                cart: [...state.cart,item],
            }
        case 'RemoveCartItem':
            const newCart = state.cart.filter(item=> item.id !== Action);
            return state = {
                ...state,
                cart: newCart,
            }
        case 'ClearCart':
            sessionStorage.removeItem("cart")
            return state = {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default itemReducer
