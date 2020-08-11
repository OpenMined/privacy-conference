import React, { useState } from 'react';
import { Flex, Image } from 'theme-ui';
import HamburgerMenu from 'react-hamburger-menu';

import theme from '../theme';

import logo from '../assets/logo.svg';

export default ({ headerHeight, sidebarWidth }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Flex
      sx={{
        position: 'fixed',
        width: ['100%', null, `calc(100% - ${sidebarWidth}%)`],
        height: `${headerHeight}px`,
        top: 0,
        zIndex: 'main',
        bg: 'muted',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 4
      }}
    >
      <Image src={logo} sx={{ height: 48 }} />
      <Flex
        bg="white"
        sx={{
          borderRadius: 'round',
          width: 48,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <HamburgerMenu
          isOpen={isActive}
          menuClicked={() => setIsActive(!isActive)}
          animationDuration={0.25}
          color={theme.colors.text}
          width={24}
          height={18}
        />
      </Flex>
    </Flex>
  );
};
