import { Container, Logo } from './styled';

import NavigationItems from './navigation-items/navigation-items';
import OptionsMenu from './options-menu/options-menu';
import React from 'react';

export default function Header() {
  return (
    <>
      <Container>
        <Logo data-testid="netflix-logo" href="/" />
        <NavigationItems />
        <OptionsMenu />
      </Container>
    </>
  );
}
