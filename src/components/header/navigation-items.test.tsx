import { render, screen } from '@testing-library/react';

import NavigationItems from './navigation-items';

const getContentTextArray = (list: HTMLElement) => {
  const items = list.children;
  const itemsArray = Array.from(items);
  const result = itemsArray.map((item: Element) => item.textContent);

  return result;
};

describe('Item', () => {
  describe('when item is rendered', () => {
    it('should show correct navigation items', () => {
      render(<NavigationItems />);

      const navigationItemsElement = screen.getByTestId('navigation-items');
      const result = getContentTextArray(navigationItemsElement);

      expect(result).toEqual([
        'Início',
        'Séries',
        'Filmes',
        'Bombando',
        'Minha lista',
      ]);
    });
  });
});
