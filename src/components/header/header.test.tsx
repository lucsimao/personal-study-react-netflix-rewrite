import { render, screen } from '@testing-library/react';

import Header from './header';
import React from 'react';

describe('Header', () => {
  describe('when page is loaded', () => {
    it('should show Netflix label ', () => {
      render(<Header />);

      const result = screen.getByText('Netflix');

      expect(result.tagName).toBe('A');
      expect(result).toBeInTheDocument();
    });
  });
});
