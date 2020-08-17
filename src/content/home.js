import React from 'react';
import { Text, Link } from 'theme-ui';

import { registerLink } from './sidebar';
import { agenda } from './agenda';

import carousel1 from '../assets/carousel-1.jpg';

export const title = 'OpenMined Privacy Conference';
export const description = `Join us on ${agenda[0].datetime.format('DD.MM.YYYY')} - ${agenda[
  agenda.length - 1
].datetime.format('DD.MM.YYYY')}`;
export const slides = [
  {
    image: carousel1,
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
