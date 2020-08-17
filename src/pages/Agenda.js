import React, { useState } from 'react';
import { Box, Heading, Flex, Text } from 'theme-ui';

import { Modal } from './Speakers';

import { agenda, title } from '../content/agenda';

export default () => {
  const [speakerSelected, setSpeakerSelected] = useState(null);

  return (
    <Box>
      <Box mb={[4, null, null, 5]}>
        <Heading as="h2" sx={{ fontSize: [6, null, null, 7] }}>
          {title}
        </Heading>
      </Box>
      {agenda.map(({ datetime, events }, dayNum) => (
        <Box key={`day-${dayNum}`}>
          <Heading
            as="h3"
            sx={{ color: 'red.500', fontSize: 6, mt: dayNum === 0 ? 0 : [4, null, null, 5] }}
          >
            {datetime.format('DD')}
          </Heading>
          <Heading as="h5" sx={{ fontSize: 4, mb: 3 }}>
            {datetime.format('dddd')}
          </Heading>
          {events.map((event, eventNum) => {
            const [expanded, setExpanded] = useState(false);

            return (
              <Flex
                sx={{
                  borderTop: 'thin',
                  borderBottom: events.length - 1 === eventNum ? 'thin' : null,
                  borderColor: 'lightGray',
                  py: 3,
                  flexDirection: ['column', null, null, 'row'],
                  justifyContent: 'space-between',
                  alignItems: ['flex-start', null, null, 'center']
                }}
                key={`day-${dayNum}-${eventNum}`}
              >
                <Box
                  sx={{
                    width: [null, null, null, 320],
                    mr: [null, null, null, 4]
                  }}
                >
                  <Heading as="h5" sx={{ fontSize: 2, color: 'red.500' }}>
                    {event.datetime.format('h:mm A (UTC)')}
                  </Heading>
                  {event.speakers.map((speaker) => (
                    <Box
                      onClick={() => setSpeakerSelected(speaker)}
                      key={`day-${dayNum}-${eventNum}-${speaker.name}`}
                      sx={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        mt: 2
                      }}
                    >
                      <Heading as="h6" sx={{ fontSize: 2 }}>
                        {speaker.name}
                      </Heading>
                      <Text sx={{ fontFamily: 'monospace', fontSize: 1, color: 'darkGray', mt: 1 }}>
                        {speaker.title}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Box
                  onClick={() => setExpanded(!expanded)}
                  sx={{ width: ['100%', null, null, '60%'], cursor: 'pointer', userSelect: 'none' }}
                >
                  <Flex
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: [3, null, null, 0]
                    }}
                  >
                    <Heading as="h5" sx={{ fontSize: 2 }}>
                      {event.title}
                    </Heading>
                    <Text
                      sx={{
                        fontWeight: 'body',
                        fontFamily: 'body',
                        transform: expanded
                          ? 'translateY(0px) scale(3) rotate(90deg)'
                          : 'translateY(-3px) scale(3) rotate(0deg)',
                        transition: 'transform 0.1s ease-in-out',
                        color: 'gray',
                        ml: [3, null, null, 4]
                      }}
                    >
                      ›
                    </Text>
                  </Flex>
                  {expanded && <Text sx={{ mt: 3 }}>{event.description}</Text>}
                </Box>
              </Flex>
            );
          })}
        </Box>
      ))}
      <Modal speaker={speakerSelected} onClose={() => setSpeakerSelected(null)} />
    </Box>
  );
};
