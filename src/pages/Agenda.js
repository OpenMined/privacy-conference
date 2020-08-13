import React, { useState } from 'react';
import { Box, Heading, Flex, Text } from 'theme-ui';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { speakers, Modal } from './Speakers';

dayjs.extend(utc);

// NOTE: Could do this recursively and be a lot more efficient... but... YOLO
const groupSchedule = (schedule) => {
  const agenda = [];

  schedule.forEach(({ datetime }) => {
    let match = false;

    for (let day = 0; day < agenda.length; day++) {
      if (datetime.isSame(agenda[day].datetime, 'day')) {
        match = true;
        break;
      }
    }

    if (!match) agenda.push({ datetime, events: [] });
  });

  schedule.forEach((item) => {
    for (let day = 0; day < agenda.length; day++) {
      if (item.datetime.isSame(agenda[day].datetime, 'day')) {
        agenda[day].events.push(item);
        break;
      }
    }
  });

  return agenda;
};

// TODO: Copy
const title = 'Agenda';
const timeFormat = 'YYYY-MM-DD|HH:mm:ss';
export const schedule = [
  {
    datetime: dayjs.utc('2020-09-26|08:00:00', timeFormat),
    speaker: speakers[0],
    title: 'Adoption of NLP models when Addressing Banking Compliance',
    description:
      'Id laboris dolor labore nostrud deserunt. Enim commodo culpa ut enim aute cillum elit eiusmod elit excepteur ea reprehenderit. Enim amet dolore in Lorem enim tempor magna et eu anim ex duis. In duis et irure est. Eu consequat et veniam officia ea. Minim laboris sit aliquip consequat velit duis eu et. Cupidatat dolore incididunt et sunt.'
  },
  {
    datetime: dayjs.utc('2020-09-26|12:00:00', timeFormat),
    speaker: speakers[0],
    title: 'Adoption of NLP models when Addressing Banking Compliance',
    description:
      'Id laboris dolor labore nostrud deserunt. Enim commodo culpa ut enim aute cillum elit eiusmod elit excepteur ea reprehenderit. Enim amet dolore in Lorem enim tempor magna et eu anim ex duis. In duis et irure est. Eu consequat et veniam officia ea. Minim laboris sit aliquip consequat velit duis eu et. Cupidatat dolore incididunt et sunt.'
  },
  {
    datetime: dayjs.utc('2020-09-26|18:00:00', timeFormat),
    speaker: speakers[0],
    title: 'Adoption of NLP models when Addressing Banking Compliance',
    description:
      'Id laboris dolor labore nostrud deserunt. Enim commodo culpa ut enim aute cillum elit eiusmod elit excepteur ea reprehenderit. Enim amet dolore in Lorem enim tempor magna et eu anim ex duis. In duis et irure est. Eu consequat et veniam officia ea. Minim laboris sit aliquip consequat velit duis eu et. Cupidatat dolore incididunt et sunt.'
  },
  {
    datetime: dayjs.utc('2020-09-27|08:00:00', timeFormat),
    speaker: speakers[0],
    title: 'Adoption of NLP models when Addressing Banking Compliance',
    description:
      'Id laboris dolor labore nostrud deserunt. Enim commodo culpa ut enim aute cillum elit eiusmod elit excepteur ea reprehenderit. Enim amet dolore in Lorem enim tempor magna et eu anim ex duis. In duis et irure est. Eu consequat et veniam officia ea. Minim laboris sit aliquip consequat velit duis eu et. Cupidatat dolore incididunt et sunt.'
  },
  {
    datetime: dayjs.utc('2020-09-28|08:00:00', timeFormat),
    speaker: speakers[0],
    title: 'Adoption of NLP models when Addressing Banking Compliance',
    description:
      'Id laboris dolor labore nostrud deserunt. Enim commodo culpa ut enim aute cillum elit eiusmod elit excepteur ea reprehenderit. Enim amet dolore in Lorem enim tempor magna et eu anim ex duis. In duis et irure est. Eu consequat et veniam officia ea. Minim laboris sit aliquip consequat velit duis eu et. Cupidatat dolore incididunt et sunt.'
  },
  {
    datetime: dayjs.utc('2020-09-28|18:00:00', timeFormat),
    speaker: speakers[0],
    title: 'Adoption of NLP models when Addressing Banking Compliance',
    description:
      'Id laboris dolor labore nostrud deserunt. Enim commodo culpa ut enim aute cillum elit eiusmod elit excepteur ea reprehenderit. Enim amet dolore in Lorem enim tempor magna et eu anim ex duis. In duis et irure est. Eu consequat et veniam officia ea. Minim laboris sit aliquip consequat velit duis eu et. Cupidatat dolore incididunt et sunt.'
  }
];

export const agenda = groupSchedule(schedule);

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
                  alignItems: expanded ? 'flex-start' : ['flex-start', null, null, 'center']
                }}
                key={`day-${dayNum}-${eventNum}`}
              >
                <Box
                  onClick={() => setSpeakerSelected(event.speaker)}
                  sx={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  <Heading as="h5" sx={{ fontSize: 2, color: 'red.500', mb: 2 }}>
                    {event.datetime.format('h:mm A (UTC)')}
                  </Heading>
                  <Heading as="h6" sx={{ fontSize: 2 }}>
                    {event.speaker.name}
                  </Heading>
                  <Text sx={{ fontFamily: 'monospace', fontSize: 1, color: 'darkGray', mt: 1 }}>
                    {event.speaker.title}
                  </Text>
                </Box>
                <Box
                  onClick={() => setExpanded(!expanded)}
                  sx={{ width: ['100%', null, null, '60%'], cursor: 'pointer', userSelect: 'none' }}
                >
                  <Heading as="h5" sx={{ fontSize: 2, mt: [3, null, null, 0] }}>
                    {event.title}
                  </Heading>
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
