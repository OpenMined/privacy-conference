import React, { useState } from 'react';
import { Box, Text, Button, Flex, Link, Image } from 'theme-ui';
import { Link as RRDLink } from 'react-router-dom';

import { registerLink } from '../content/sidebar';

const linkStyles = {
  borderTop: 'thin',
  borderColor: 'lightGray',
  fontSize: 4,
  fontFamily: 'monospace',
  p: 4,
  display: 'flex',
  alignItems: 'center'
};

const SidebarLink = ({ to, onClick, text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      as={RRDLink}
      sx={linkStyles}
      to={to}
      onClick={onClick}
      onMouseEnter={() => !isHovered && setIsHovered(true)}
      onMouseLeave={() => isHovered && setIsHovered(false)}
    >
      {text}
      {isHovered && children}
    </Link>
  );
};

export const SidebarContent = ({ headerHeight, onClick }) => (
  <Flex
    sx={{
      height: `calc(100% - ${headerHeight})`,
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
  >
    <Text sx={{ p: 4, fontSize: 3, color: 'darkGray' }}>
      {process.env.REACT_APP_PAGE_DESCRIPTION}
    </Text>
    <Flex sx={{ flexDirection: 'column' }}>
      <SidebarLink text="Speakers" to="/speakers" onClick={onClick}>
        <Image
          sx={{ height: 32, ml: 3 }}
          src="https://emojis.slackmojis.com/emojis/images/1584726375/8272/blob-cool.gif"
          alt="Speakers"
        />
      </SidebarLink>
      <SidebarLink text="Agenda" to="/agenda" onClick={onClick}>
        <Image
          sx={{ height: 32, ml: 3 }}
          src="https://emojis.slackmojis.com/emojis/images/1568570821/6412/meow_popcorn.gif"
          alt="Agenda"
        />
      </SidebarLink>
      <SidebarLink text="Sponsors" to="/sponsors" onClick={onClick}>
        <Image
          sx={{ height: 32, ml: 3 }}
          src="https://emojis.slackmojis.com/emojis/images/1531847402/4229/blob-clap.gif"
          alt="Sponsors"
        />
      </SidebarLink>
    </Flex>
  </Flex>
);

export const SidebarCTAs = ({ headerHeight }) => (
  <Flex
    sx={{
      height: headerHeight,
      justifyContent: ['flex-start', null, 'flex-end'],
      alignItems: 'center',
      px: 4
    }}
  >
    {/* <Button variant="black" as="a" target="_blank" href={speakerLink}>
      Become a Speaker
    </Button> */}
    <Button variant="black" as="a" target="_blank" ml={3} href={registerLink}>
      Register
    </Button>
  </Flex>
);

export default ({ headerHeight, sidebarWidth, footerHeight }) => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: sidebarWidth,
      height: `calc(100% - ${footerHeight})`,
      display: ['none', null, 'block'],
      borderLeft: 'thin',
      borderColor: 'lightGray'
    }}
  >
    <SidebarCTAs headerHeight={headerHeight} />
    <SidebarContent headerHeight={headerHeight} />
  </Box>
);
