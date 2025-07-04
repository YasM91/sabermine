import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('header', () => {
  it('renders the header with icon and sabermine', () => {
    render(<Header title="test" />);

    const sabermineText = screen.getByText(`Sabermine`);
    const sabermineLogo = screen.getByAltText(/Sabermine logo/i);

    expect(sabermineText).toBeInTheDocument();
    expect(sabermineLogo).toBeInTheDocument();
  });

  it('renders the header title', () => {
    render(<Header title="test" />);

    const title = screen.getByRole('heading', { name: 'test' });

    expect(title).toBeInTheDocument();
  });
});
