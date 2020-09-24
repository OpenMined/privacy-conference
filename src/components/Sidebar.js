import React, { useState } from 'react';
import { Box, Text, Button, Flex, Link, Image } from 'theme-ui';
import { Link as RRDLink } from 'react-router-dom';

import {
  registerTitle,
  registerLink,
  speakersEmoji,
  agendaEmoji,
  sponsorsEmoji,
  // resourcesEmoji
} from '../content/sidebar';

import { titleLink as sponsorTitle, sponsorLink } from '../content/sponsors';

const linkStyles = {
  borderTop: 'thin',
  borderColor: 'lightGray',
  fontSize: [3, null, 4],
  fontFamily: 'monospace',
  p: [3, null, 4],
  display: 'flex',
  alignItems: 'center',
  height: `${(1 / 3) * 100}%`
  // TODO: Uncomment the below and delete the above to make resources page live
  // height: `${(1 / 4) * 100}%`
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
    <Text sx={{ p: [3, null, 4], fontSize: [2, null, 3], color: 'darkGray', maxWidth: 540 }}>
      {process.env.REACT_APP_PAGE_DESCRIPTION}
    </Text>
    <Flex sx={{ flexDirection: 'column', height: '100%' }}>
      <SidebarLink text="Speakers" to="/speakers" onClick={onClick}>
        <Image sx={{ height: 32, ml: 3 }} src={speakersEmoji} alt="Speakers" />
      </SidebarLink>
      <SidebarLink text="Agenda" to="/agenda" onClick={onClick}>
        <Image sx={{ height: 32, ml: 3 }} src={agendaEmoji} alt="Agenda" />
      </SidebarLink>
      <SidebarLink text="Sponsors" to="/sponsors" onClick={onClick}>
        <Image sx={{ height: 32, ml: 3 }} src={sponsorsEmoji} alt="Sponsors" />
      </SidebarLink>
      {/* TODO: Uncomment the below to make resources page live */}
      {/* <SidebarLink text="Resources" to="/resources" onClick={onClick}>
        <Image sx={{ height: 32, ml: 3 }} src={resourcesEmoji} alt="Resources" />
      </SidebarLink> */}
    </Flex>
  </Flex>
);

export const SidebarCTAs = ({ headerHeight }) => (
  <Flex
    sx={{
      height: headerHeight,
      justifyContent: ['flex-start', null, 'flex-end'],
      alignItems: 'center',
      px: [3, null, 4]
    }}
  >
    <Button variant="black" as="a" target="_blank" href={sponsorLink} mr={3}>
      {sponsorTitle.slice(0, -2)}
    </Button>
    <Button variant="black" as="a" target="_blank" href={registerLink}>
      {registerTitle}
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
