import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './components/Header';

describe('Header', () => {
    it('should have application title', async () => {
        render(<Header></Header>);
        const title = screen.getByText(/call a friend/i); //harus mempunyai header title call a friend
        expect(title).toBeInTheDocument();
    });
    
    it('should have application subtitle', async () => {
        render(<Header></Header>);
        const title = screen.getByText(/your friendly contact app/i); //harus ada subtitle pada header awas dengan nama yg sama 
        expect(title).toBeInTheDocument();
    });
});

