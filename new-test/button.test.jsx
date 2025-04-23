import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Button from './Button';

test('renders button with correct text', () => {
render(<Button label="Click me"/>);
const buttonElement = screen.getByRole('button');
// screen.debug(buttonElement);
expect(buttonElement).toBeInTheDocument();
});