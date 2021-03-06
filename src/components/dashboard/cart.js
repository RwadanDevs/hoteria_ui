import React from 'react';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import '../../scss/components/cart.scss';
import { createOrder } from '../../store/actions/Actions';
import Title from '../helpers/dynamicTitle';

const nextVariants = {
    hidden: { 
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 80 }
    },
  }

  

const cart = ({ cart,removeItem,createAnOrder,clearCart,socket }) => {
    
    Title();

    cart = cart.reverse()

    if(cart[0]) sessionStorage.setItem("cart",JSON.stringify(cart))

    let totalCost = 0;
    const items = [];
    
    for(const item of cart){
        const { price,id } = item;
        totalCost += parseInt(price);
        items.push(parseInt(id));
    }

    return (
            <div className="container cartItems">
                {cart[0]?
                <>
                    <div className="cart-totals center">
                        <span className="white-text">Total</span>
                        <span>
                            <i className="fas fa-cart-plus"></i>
                            {cart.length+' item'}
                        </span>
                        <span>
                            <i className="fas fa-wallet"></i>
                            {totalCost+' $'}
                        </span>
                    </div>
                    {
                        cart.map(item=>(
                                <div key={item.id} className="cartItem">
                                    <div className="avatar">
                                        <img src={item.photoUrl} alt={item.name+' image'}/>
                                    </div>
                                    <div className="details">
                                        <span>
                                            <i className="fas fa-cart-plus"></i>
                                            {item.name}
                                        </span>
                                        <span>
                                            <i className="fas fa-wallet"></i>
                                            {item.price+' $'}
                                        </span>
                                    </div>
                                    <div className="cancer">
                                        <span>
                                            <i className="center fas fa-trash" onClick={()=>removeItem(item.id)}></i>
                                        </span>
                                    </div>
                                </div>
                            )
                        )
                    }
                    <button className="center" onClick={()=>{
                        createAnOrder({items});
                        clearCart();
                        }}>
                        Place Order 
                        <motion.i 
                            variants={nextVariants} 
                            initial="hidden"
                            animate="visible"
                        className="fas fa-shopping-cart"></motion.i> 
                    </button>
                </> : 
                <h1 className="grey-text bold center"> New Order
                    <motion.i variants={nextVariants} 
                        initial="hidden"
                        animate="visible"
                        className=" fas fa-shopping-cart"
                        style={{fontSize:"40px",marginLeft:"5%",color:"grey"}}
                        >
                    </motion.i> 
                </h1>}
            </ div>
        )
    }

const mapStateToProps = (state) =>({
    authInfo : state.auth.userInfo,
    cart: state.items.cart,
})
    
const mapDiatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch({type:'RemoveCartItem',action:id}),
    createAnOrder: (payload)=> dispatch(createOrder(payload)),
    clearCart: ()=> dispatch({type:'ClearCart',action:{}})
})
export default connect(mapStateToProps,mapDiatchToProps)(cart);