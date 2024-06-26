
import axios from 'axios'
import * as actionType from '../action/reducers/constants/cartConstant'
export const addtoCart=(id,quantity)=>async(dispatch)=>{
try {
   const {data} =await axios.get(`https://fakestoreapi.com/products/${id}`)
dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}})
} catch (error) {
    dispatch({type:actionType.ADD_TO_CART_ERROR,payload:error.message})
}
}

export const removeFromCart=(id)=>(dispatch)=>{
dispatch({type:actionType.REMOVE_FROM_CART,payload:id})
}