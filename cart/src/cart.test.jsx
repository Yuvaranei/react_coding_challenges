import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from './cart';
import cartReducer, {productInfo, addItemToCart} from './reducers/cart.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const store = configureStore({reducer: {cart: cartReducer}})


function SetStateWrapper({children}){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addItemToCart({productId: 'prod1',quantity: 1}))
    }, [dispatch]);
  return children;
}

describe('Cart component', () => {
    const renderComponent = () => {
        render(
            <Provider store={store}>
                <SetStateWrapper>
                    <Cart/>
                </SetStateWrapper>
            </Provider>
        )
    }

    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('Should render the cart component', () => {
        renderComponent();
        expect(screen.getByText('Cart (1)')).toBeInTheDocument();
    })

    test('Should increase the quantity on click on + icon', () => {
        renderComponent();
        const incrementQuantity = screen.getByRole('button', {name: '+'})
        expect(screen.getByText('Cart (2)')).toBeInTheDocument();
        fireEvent.click(incrementQuantity);
        expect(screen.getByText('Cart (3)')).toBeInTheDocument();
    })

    test('Should decrease the quantity on click on - icon', () => {
        renderComponent();
        const incrementQuantity = screen.getByRole('button', {name: '-'})
        expect(screen.getByText('Cart (4)')).toBeInTheDocument();
        fireEvent.click(incrementQuantity);
        expect(screen.getByText('Cart (3)')).toBeInTheDocument();
    })

    test('on discount input', () => {
        renderComponent();
        const discountText = screen.getByRole('textbox')
        screen.debug(discountText);
        expect(discountText.value).toBe('')
        fireEvent.change(discountText, {target: {value: '10PERCENT'}});
        expect(discountText.value).toBe('10PERCENT');

        expect(screen.getByText('Final Price: 92')).toBeInTheDocument();
        const applyDiscountButton = screen.getByRole('button', {name: 'Apply'});
        fireEvent.click(applyDiscountButton);
        expect(screen.getByText('Final Price: 82.8')).toBeInTheDocument();


    })

    test('Should decrease the quantity on click on Remove icon', () => {
        renderComponent();
        const incrementQuantity = screen.getByRole('button', {name: 'Remove'})
        expect(screen.getByText('Cart (5)')).toBeInTheDocument();
        fireEvent.click(incrementQuantity);
        expect(screen.getByText('Cart (0)')).toBeInTheDocument();
    })
})