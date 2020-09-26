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
        <Text sx={{ fontWeight: 'bold', fontSize: 3, color: 'gray' }} mt={[3, null, 4]}>
          All times are displayed in your local time zone.
        </Text>
      </Box>
      {agenda.map(({ datetime, events }, dayNum) => (
        <Box key={`day-${dayNum}`}>
          <Heading
            as="h3"
            sx={{
              color: 'red.500',
              fontSize: 6,
              mt: dayNum === 0 ? 0 : [4, null, null, 5],
              textAlign: 'right'
            }}
          >
            {datetime.format('DD')}
          </Heading>
          <Heading as="h5" sx={{ fontSize: 4, mb: 3, textAlign: 'right' }}>
            {datetime.format('dddd')}
          </Heading>
          {events.map((event, eventNum) => {
            const [expanded, setExpanded] = useState(false);

            let GroupHeading = null;

            if (
              eventNum === 0 ||
              events[eventNum].group.title !== events[eventNum - 1].group.title
            ) {
              let lastGroupTime;

              for (let i = eventNum; i < events.length; i++) {
                if (events[i].group.title === event.group.title) {
                  lastGroupTime = events[i].datetime.add(events[i].duration.as('minutes'), 'minutes');
                } else break;
              }

              GroupHeading = (
                <Box sx={{ mt: 5, mb: 4 }}>
                  <Text
                    sx={{
                      color: 'red.500',
                      textTransform: 'uppercase',
                      fontSize: 2,
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  >
                    {event.datetime.local().format('h:mm A')} -{' '}
                    {lastGroupTime.local().format('h:mm A')}
                  </Text>
                  <Heading as="h4" sx={{ fontSize: 4, mb: 3 }}>
                    {event.group.title}
                  </Heading>
                  <Text sx={{ fontSize: 2, color: 'darkGray', maxWidth: 460 }}>
                    {event.group.description}
                  </Text>
                </Box>
              );
            }

            return (
              <Box key={`day-${dayNum}-${eventNum}`}>
                {GroupHeading}
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
                >
                  <Box
                    sx={{
                      width: [null, null, null, 320],
                      mr: [null, null, null, 4]
                    }}
                  >
                    <Heading as="h5" sx={{ fontSize: 2, color: 'red.500' }}>
                      {event.datetime.local().format('h:mm A')}{' '}
                      <Text sx={{ display: 'inline', opacity: 0.35 }}>
                        ({event.datetime.format('h:mm A UTC')})
                      </Text>
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
                        <Text
                          sx={{ fontFamily: 'monospace', fontSize: 1, color: 'darkGray', mt: 1 }}
                        >
                          {speaker.title}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    onClick={() => setExpanded(!expanded)}
                    sx={{
                      width: ['100%', null, null, '60%'],
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
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
              </Box>
            );
          })}
        </Box>
      ))}
      <Modal speaker={speakerSelected} onClose={() => setSpeakerSelected(null)} />
    </Box>
  );
};
