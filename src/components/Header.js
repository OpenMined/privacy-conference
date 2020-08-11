import React, { useState } from 'react';
import { Flex, Image } from 'theme-ui';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

import theme from '../theme';

import logo from '../assets/logo.svg';

export default ({ headerHeight, sidebarWidth }) => {
  const [isActive, setIsActive] = useState(false);

  const size = 48;

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
        px: 4,
        ':after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: -10,
          width: '100%',
          height: 10,
          background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${theme.colors.muted} 100%)`
        }
      }}
    >
      <Link to="/">
        <Image src={logo} sx={{ width: size, height: size }} />
      </Link>
      <Flex
        bg="white"
        sx={{
          borderRadius: 'round',
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
          display: ['block', null, 'none']
        }}
      >
        <HamburgerMenu
          isOpen={isActive}
          menuClicked={() => setIsActive(!isActive)}
          animationDuration={0.25}
          color={theme.colors.text}
          width={18}
          height={12}
        />
      </Flex>
    </Flex>
  );
};
