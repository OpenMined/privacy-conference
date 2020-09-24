import React from 'react';
import { Flex, Box, Heading, Grid, Text } from 'theme-ui';

import { title, description, resources } from '../content/resources';

export default () => (
  <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box mb={[4, null, null, 5]}>
      <Heading as="h2" sx={{ fontSize: [6, null, null, 7] }}>
        {title}
      </Heading>
      <Heading as="h3" mt={[3, null, 4]} sx={{ fontFamily: 'body', fontWeight: 'body' }}>
        {description}
      </Heading>
    </Box>
    <Box>
      {resources.map((section, sectionIndex) => (
        <Box key={`section-${section.title}`} mt={sectionIndex === 0 ? 0 : 4}>
          <Heading
            as="h4"
            sx={{
              fontSize: [4, null, null, 5],
              pb: 2,
              mb: [3, null, null, 4],
              borderBottom: 'thin',
              borderColor: 'lightGray'
            }}
          >
            {section.title}
          </Heading>
          {section.talks.map((talk, talkIndex) => (
            <Box
              key={`talk-${section.title}-${talk.title}`}
              mt={talkIndex === 0 ? 0 : [3, null, null, 4]}
            >
              <Heading
                as="h5"
                sx={{
                  fontSize: [3, null, null, 4],
                  mb: 3
                }}
              >
                {talk.title}
              </Heading>
              <Text
                key={`link-${section.title}-${talk.description}`}
                sx={{
                  as: 'p',
                  mb: 3
                }}
              >
                {talk.description}
              </Text>
              <Grid gap={[3, null, null, 4]} columns={[1, 2, 1, 2]}>
                {talk.links.map((link) => (
                  <Text
                    key={`link-${section.title}-${talk.title}-${link.title}`}
                    as="a"
                    target="_blank"
                    href={link.link}
                    sx={{
                      transition: 'color 0.25s ease-in-out',
                      color: 'primary',
                      textDecoration: 'none',
                      ':hover': {
                        color: 'teal.700',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {link.title}
                  </Text>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  </Flex>
);
