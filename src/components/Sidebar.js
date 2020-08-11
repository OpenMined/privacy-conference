import React from 'react';
import { Box, Text, Button, Flex, Link } from 'theme-ui';
import { Link as RRDLink } from 'react-router-dom';

const description = `Description of what the OpenMined Privacy conference is about. Can also include inline links to further information like becoming a sponsor.`;

const linkStyles = {
  borderTop: 'thin',
  borderColor: 'lightGray',
  fontSize: 4,
  fontFamily: 'monospace',
  textDecoration: 'none',
  px: 3,
  py: 4,
  ':hover': {
    textDecoration: 'underline'
  }
};

export const SidebarContent = () => (
  <>
    <Text sx={{ px: 3, py: 4, fontSize: 3, color: 'darkGray' }}>{description}</Text>
    <Flex sx={{ flexDirection: 'column' }}>
      <Link as={RRDLink} sx={linkStyles} to="/speakers">
        Speakers
      </Link>
      <Link as={RRDLink} sx={linkStyles} to="/agenda">
        Agenda
      </Link>
      <Link as={RRDLink} sx={linkStyles} to="/sponsors">
        Sponsors
      </Link>
    </Flex>
  </>
);

export const SidebarCTAs = () => (
  <>
    <Button>Become a Speaker</Button>
    <Button>Register</Button>
  </>
);

export default ({ sidebarWidth, footerHeight }) => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: `${sidebarWidth}%`,
      height: `calc(100% - ${footerHeight}px)`,
      display: ['none', null, 'block'],
      zIndex: 'main',
      borderLeft: 'thin',
      borderColor: 'lightGray'
    }}
  >
    <SidebarCTAs />
    <SidebarContent />
  </Box>
);
