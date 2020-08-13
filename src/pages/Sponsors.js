import React from 'react';
import { Flex, Box, Heading, Link, Grid, AspectImage } from 'theme-ui';

import morten from '../assets/morten.jpg';

// TODO: Copy
const title = 'Sponsors';
const sponsorLink = 'https://openmined.org';
const sponsors = [
  {
    image: morten,
    name: 'OpenMined',
    url: 'https://openmined.org'
  },
  {
    image: morten,
    name: 'OpenMined',
    url: 'https://openmined.org'
  },
  {
    image: morten,
    name: 'OpenMined',
    url: 'https://openmined.org'
  },
  {
    image: morten,
    name: 'OpenMined',
    url: 'https://openmined.org'
  },
  {
    image: morten,
    name: 'OpenMined',
    url: 'https://openmined.org'
  },
  {
    image: morten,
    name: 'OpenMined',
    url: 'https://openmined.org'
  }
];

export default () => (
  <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box mb={[4, null, null, 5]}>
      <Heading as="h2" sx={{ fontSize: [6, null, null, 7] }}>
        {title}
      </Heading>
      <Heading as="h3" mt={[3, null, 4]}>
        <Link as="a" href={sponsorLink} target="_blank" sx={{ textDecoration: 'none' }}>
          Become a Sponsor →
        </Link>
      </Heading>
    </Box>
    <Grid gap={[4, null, null, 5]} columns={[1, 2, null, 3]}>
      {sponsors.map(({ image, name, url }, index) => (
        <Link as="a" href={url} target="_blank" key={`sponsor-${index}`}>
          <AspectImage ratio={1} src={image} alt={name} />
        </Link>
      ))}
    </Grid>
  </Flex>
);
