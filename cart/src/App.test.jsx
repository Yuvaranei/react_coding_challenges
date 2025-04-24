import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';
import {Provider} from 'react-redux';
import cartReducer from './reducers/cart.reducer';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({ reducer: {cart: cartReducer} });


describe('App component', () => {
    const renderApp = () => {
        render(
            <Provider store={store}><App/></Provider>
        );
    }

    test('it should render App component', () => {
        renderApp();
        expect(screen.getByText('Product 1')).toBeInTheDocument();
    })

    test('on click of add to cart, should increase the cart quantity', () => {
        renderApp();
        const buttonEle = screen.queryAllByRole('button');
        fireEvent.click(buttonEle[0]);
        expect(screen.getByText('Cart (1)')).toBeInTheDocument();
    })
});