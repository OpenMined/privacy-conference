import React from 'react';
import { Flex, Box, Heading, Link, Grid, AspectImage } from 'theme-ui';

import { sponsors, title, titleLink, sponsorLink } from '../content/sponsors';

export default () => (
  <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box mb={[4, null, null, 5]}>
      <Heading as="h2" sx={{ fontSize: [6, null, null, 7] }}>
        {title}
      </Heading>
      <Heading as="h3" mt={[3, null, 4]}>
        <Link as="a" href={sponsorLink} target="_blank" sx={{ textDecoration: 'none' }}>
          {titleLink}
        </Link>
      </Heading>
    </Box>
    <Grid gap={[4, null, null, 5]} columns={[1, 2, null, 3]}>
      {sponsors
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map(({ image, name, url }, index) => (
          <Link as="a" href={url} target="_blank" key={`sponsor-${index}`}>
            <AspectImage ratio={1} src={image} alt={name} />
          </Link>
        ))}
    </Grid>
  </Flex>
);
