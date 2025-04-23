import {createSlice} from '@reduxjs/toolkit';

const productInfo = new Map();

productInfo.set('prod1',{
    name: 'Product 1',
    id: 'prod1',
    price: 23
});

productInfo.set('prod2',{
    name: 'Product 2',
    id: 'prod2',
    price: 3
});

productInfo.set('prod3',{
    name: 'Product 3',
    id: 'prod3',
    price: 12
});


const discountData = {
    '10PERCENT': 10/100,
    'FLAT150': 150,
    '15PERCENT': 15/100
}

const calculateTotalPrice = (state) => {
    let total = 0;
    state.cartData.map(item => {
        const product = productInfo.get(item.productId);
        total += product.price * item.quantity;
    })
   return total;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        totalPrice: 0,
        finalPrice: 0,
        cartData: [],
        productInfo
    },
    reducers: {
        addItemToCart: (state, action) => {
            // console.log("")
            const {productId, quantity} = action.payload;
            const product = productInfo.get(productId);
           const productInCart = state.cartData.find(item => item.productId == productId);
           if(productInCart){
            productInCart.quantity += quantity;
           } else {
            state.cartData.push({productId,quantity});
           }
           state.totalPrice = calculateTotalPrice(state);
        },
        removeItemFromCart: (state, action) => {
            const {productId} = action.payload;
            const productInCartIndex = state.cartData.findIndex(item => item.productId == productId);
            state.cartData.splice(productInCartIndex, 1);
            // console.log("Whats in state = ", state.cartData);
            state.totalPrice = calculateTotalPrice(state);
        },
        increaseQuantity: (state, action) => {
            const {productId} = action.payload;
            const productInCart = state.cartData.find(item => item.productId == productId);
            productInCart.quantity++;
            state.totalPrice = calculateTotalPrice(state);
        },
        decreaseQuantity: (state, action) => {
            const {productId} = action.payload;
            const productInCart = state.cartData.find(item => item.productId == productId);
            if(productInCart.quantity>0){
                productInCart.quantity--;
                state.totalPrice = calculateTotalPrice(state);
            }
        },
        applyDiscount: (state, action) => {
            console.log(state.totalPrice, action.payload);
            state.finalPrice = state.totalPrice - (state.totalPrice * discountData[action.payload])
        }
    }
});

export const {addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, applyDiscount} = cartSlice.actions;
export default cartSlice.reducer;