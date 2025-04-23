import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { applyDiscount, decreaseQuantity, increaseQuantity, removeItemFromCart } from './reducers/cart.reducer';

export default function Cart({}){

    const {cartData, totalPrice, finalPrice} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    console.log("Final price", finalPrice);

    const [discount, setValue] = useState('');

    const quantity = cartData.map(item => item.quantity).reduce((prev, curr) => prev+curr,0);
    return (
        <div className='cart'>
            {`Cart (${quantity || 0})`}
            {
                cartData.map(item => {
                    return (
                        <div key={item.productId}>
                            {item.productId}
                            <button onClick={() => dispatch(decreaseQuantity({productId: item.productId}))}>-</button>
                            {item.quantity}
                            <button onClick={() => dispatch(increaseQuantity({productId: item.productId}))}>+</button>
                            <button onClick={() => dispatch(removeItemFromCart({productId: item.productId}))}>Remove</button>
                        </div>
                    )
                })
            }
            <div>Total Price: {totalPrice}</div>
            <label htmlFor={"discount"}>Discount Coupon:</label>
            <input type="text" id="discount" value={discount} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => dispatch(applyDiscount(discount))}>Apply</button>
            <div>Final Price: {finalPrice || totalPrice}</div>
        </div>
    )
}