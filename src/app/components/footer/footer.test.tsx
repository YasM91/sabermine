import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  it('renders the footer with icon and sabermine', () => {
    render(<Footer />);

    const sabermineText = screen.getByText(`Sabermine`);
    const sabermineLogo = screen.getByAltText(/Sabermine logo/i);

    expect(sabermineText).toBeInTheDocument();
    expect(sabermineLogo).toBeInTheDocument();
  });

  it('has copyright text', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/all rights reserved/i);

    expect(copyrightText).toBeInTheDocument();
  });
});
