import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
          //bu bir obje javada newlemek gibi spread ile ayırmak
        };
      } else {
        return {
          ...state,
          // arrayın içindekileri korur üstteki ile , alttakiyle koruyup üzerine ekler
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }
    case REMOVE_FROM_CART:
      let product2 = state.cartItems.find((c) => c.product.id === payload.id);
      let productIndex = state.cartItems.findIndex((x) => +x.product.id === +payload.id)

      if (product2.quantity > 1) {
        --product2.quantity;
        return{
          ...state,
        };
      }else{
        state.cartItems.splice(productIndex,1)      
      }

    default:
      //bu aksiyonlar değilse statein kendisini döndür
      return state;
  }
}
