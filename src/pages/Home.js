import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Box, Heading, Image, Text } from 'theme-ui';

// TODO: Copy
const title = 'OpenMined Privacy Conference';
const description = 'Join us on 26.09.2020 - 27.09.2020';
const slides = [
  {
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108271127%2F113478476543%2F1%2Foriginal.20200811-091718?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1d82b159c28458269d7bd1d3d24e281e',
    title: 'Announcement',
    text: 'This week will simply be a callout to register'
  },
  {
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108271127%2F113478476543%2F1%2Foriginal.20200811-091718?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1d82b159c28458269d7bd1d3d24e281e',
    title: 'Announcement 2',
    text: 'This week will simply be a callout to register'
  },
  {
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108271127%2F113478476543%2F1%2Foriginal.20200811-091718?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1d82b159c28458269d7bd1d3d24e281e',
    title: 'Announcement 3',
    text: 'This week will simply be a callout to register'
  }
];

const Carousel = ({ slides }) => {
  const slideSpeed = 5000;
  const [slideNum, setSlideNum] = useState(0);

  const nextSlideIndex = slideNum + 1 >= slides.length ? 0 : slideNum + 1;
  const nextSlide = useCallback(() => setSlideNum(nextSlideIndex), [nextSlideIndex]);

  const prevSlideIndex = slideNum - 1 < 0 ? slides.length - 1 : slideNum - 1;
  const prevSlide = () => setSlideNum(prevSlideIndex);

  useEffect(() => {
    const timer = setTimeout(nextSlide, slideSpeed);
    return () => clearTimeout(timer);
  }, [slideNum, nextSlide]);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      {slides.map(({ image, title, text }, index) => (
        <Box
          key={title}
          sx={{
            position: 'relative',
            top: index === slideNum ? 0 : -9999,
            left: index === slideNum ? 0 : -9999,
            display: index === slideNum ? 'flex' : 'none',
            flexDirection: ['column', null, null, 'row'],
            alignItems: ['flex-start', null, null, 'center']
          }}
        >
          <Box sx={{ width: ['100%', null, null, 540] }}>
            <Image
              src={image}
              alt={title}
              sx={{
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box ml={[0, null, null, 4]} mt={[3, null, null, 0]}>
            <Heading as="h4" sx={{ fontFamily: 'monospace', mb: 2 }}>
              {title}
            </Heading>
            <Text>{text}</Text>
          </Box>
        </Box>
      ))}
      <Flex
        sx={{
          width: 200,
          mt: [3, null, 4],
          ml: 'auto',
          mr: 'auto',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text sx={{ fontSize: 4, cursor: 'pointer' }} onClick={prevSlide}>
          ←
        </Text>
        <Text>
          {slideNum + 1} of {slides.length}
        </Text>
        <Text sx={{ fontSize: 4, cursor: 'pointer' }} onClick={nextSlide}>
          →
        </Text>
      </Flex>
    </Box>
  );
};

export default () => (
  <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box mb={[4, null, null, 5]}>
      <Heading as="h1" sx={{ fontSize: [6, null, null, 7] }}>
        {title}
      </Heading>
      <Heading as="h3" mt={[3, null, 4]} sx={{ fontFamily: 'monospace', fontWeight: 'body' }}>
        {description}
      </Heading>
    </Box>
    <Carousel slides={slides} />
  </Flex>
);
