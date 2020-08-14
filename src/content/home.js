import React from 'react';
import { Text, Link } from 'theme-ui';

import { registerLink } from './sidebar';
import { agenda } from './agenda';

// TODO: Copy
export const title = 'OpenMined Privacy Conference';
export const description = `Join us on ${agenda[0].datetime.format('DD.MM.YYYY')} - ${agenda[
  agenda.length - 1
].datetime.format('DD.MM.YYYY')}`;
export const slides = [
  {
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108271127%2F113478476543%2F1%2Foriginal.20200811-091718?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1d82b159c28458269d7bd1d3d24e281e',
    title: 'Tickets have now been released!',
    text: () => (
      <Text>
        Register and get your FREE ticket now{' '}
        <Link as="a" href={registerLink} target="_blank">
          via Eventbrite
        </Link>
        .
      </Text>
    )
  }
];
