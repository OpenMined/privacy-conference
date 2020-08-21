import React, { useState, useEffect } from 'react';
import { Flex, Box, Image } from 'theme-ui';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

import { SidebarContent, SidebarCTAs } from './Sidebar';

import theme from '../theme';

import logo from '../assets/logo.svg';

const useDelayUnmount = (isMounted, delayTime) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(true), delayTime);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
};

export default ({ headerHeight, sidebarWidth, footerHeight }) => {
  const transitionTime = 250;
  const itemSize = 48;

  const [isActive, setIsActive] = useState(false);
  const shouldRenderMenu = useDelayUnmount(isActive, transitionTime);
  const containerHeight = isActive ? `calc(100% - ${footerHeight})` : headerHeight;
  const onMenuClick = () => setIsActive(!isActive);

  return (
    <Flex
      sx={{
        position: 'fixed',
        width: ['100%', null, `calc(100% - ${sidebarWidth})`],
        height: [containerHeight, null, headerHeight],
        transition: `height ${transitionTime}ms ease-in-out`,
        top: 0,
        bg: 'muted',
        flexDirection: 'column',
        px: 4,
        ':after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: -10,
          width: '100%',
          height: 10,
          background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${theme.colors.muted} 100%)`
        }
      }}
    >
      <Flex
        sx={{
          width: '100%',
          height: headerHeight,
          minHeight: headerHeight,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to="/" onClick={isActive ? onMenuClick : null}>
          <Image src={logo} alt="OpenMined" sx={{ width: itemSize, height: itemSize }} />
        </Link>
        <Flex
          bg={isActive ? 'lightGray' : 'white'}
          sx={{
            transition: 'background 0.25s ease-in-out',
            borderRadius: 'round',
            width: itemSize,
            height: itemSize,
            justifyContent: 'center',
            alignItems: 'center',
            display: ['block', null, 'none']
          }}
        >
          <HamburgerMenu
            isOpen={isActive}
            menuClicked={onMenuClick}
            animationDuration={0.25}
            color={theme.colors.text}
            width={18}
            height={12}
          />
        </Flex>
      </Flex>
      {shouldRenderMenu && (
        <Box
          sx={{
            display: ['flex', null, 'none'],
            flexDirection: 'column',
            opacity: isActive ? 1 : 0,
            transition: `opacity ${transitionTime}ms ease-in-out`
          }}
        >
          <SidebarContent headerHeight={headerHeight} onClick={onMenuClick} />
          <SidebarCTAs headerHeight={headerHeight} />
        </Box>
      )}
    </Flex>
  );
};
