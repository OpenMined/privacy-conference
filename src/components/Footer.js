import React from 'react';
import { Flex, Text, Link } from 'theme-ui';

import FacebookIcon from '../assets/facebook-icon';
import TwitterIcon from '../assets/twitter-icon';
import LinkedInIcon from '../assets/linkedin-icon';

export default ({ footerHeight }) => (
  <Flex
    sx={{
      position: 'fixed',
      width: '100%',
      height: `${footerHeight}px`,
      bottom: 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 'main',
      bg: 'muted',
      borderTop: 'thin',
      borderColor: 'lightGray',
      px: 4
    }}
  >
    <Text>
      Go to:{' '}
      <Link href="https://openmined.org" target="_blank">
        openmined.org
      </Link>
    </Text>
    <Flex sx={{ height: 24 }}>
      <Text sx={{ display: ['none', 'inline'] }}>Share:</Text>
      <Link ml={3} href={process.env.REACT_APP_FACEBOOK_PAGE}>
        <FacebookIcon />
      </Link>
      <Link ml={3} href={process.env.REACT_APP_TWITTER_PAGE}>
        <TwitterIcon />
      </Link>
      <Link ml={3} href={process.env.REACT_APP_LINKEDIN_PAGE}>
        <LinkedInIcon />
      </Link>
    </Flex>
  </Flex>
);
