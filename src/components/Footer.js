import React from 'react';
import { Flex, Text, Link } from 'theme-ui';

import FacebookIcon from '../assets/facebook-icon';
import TwitterIcon from '../assets/twitter-icon';
import LinkedInIcon from '../assets/linkedin-icon';

const onFacebookClick = () => {
  window.FB.ui({
    method: 'share',
    href: window.location.href
  });
};

export default ({ footerHeight }) => (
  <Flex
    sx={{
      position: 'fixed',
      width: '100%',
      height: footerHeight,
      bottom: 0,
      justifyContent: 'space-between',
      alignItems: 'center',
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
      <Link ml={3} onClick={onFacebookClick}>
        <FacebookIcon />
      </Link>
      <Link
        ml={3}
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `I'm going to privacy con! ${window.location.href}`
        )}`}
      >
        <TwitterIcon />
      </Link>
      <Link
        ml={3}
        target="_blank"
        href={`https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(
          window.location.href
        )}`}
      >
        <LinkedInIcon />
      </Link>
    </Flex>
  </Flex>
);
