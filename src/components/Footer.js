import React from 'react';
import { Flex, Text, Link, Image } from 'theme-ui';

import FacebookIcon from '../assets/facebook-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';
import LinkedInIcon from '../assets/linkedin-icon.svg';

export default ({ footerHeight }) => (
  <Flex
    sx={{
      position: 'fixed',
      width: '100%',
      height: `${footerHeight}px`,
      bottom: 0,
      justifyContent: 'space-between',
      zIndex: 'main',
      bg: 'muted'
    }}
  >
    <Text>
      Go to:{' '}
      <Link href="https://openmined.org" target="_blank">
        openmined.org
      </Link>
    </Text>
    <Flex>
      <Text sx={{ display: ['none', null, 'inline'] }}>Share:</Text>
      <Link href={process.env.REACT_APP_FACEBOOK_PAGE}>
        <Image src={FacebookIcon} />
      </Link>
      <Link href={process.env.REACT_APP_TWITTER_PAGE}>
        <Image src={TwitterIcon} />
      </Link>
      <Link href={process.env.REACT_APP_LINKEDIN_PAGE}>
        <Image src={LinkedInIcon} />
      </Link>
    </Flex>
  </Flex>
);
