import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Box, Heading, Image, Text } from 'theme-ui';

import { title, description, slides } from '../content/home';

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
            {typeof text === 'string' && <Text>{text}</Text>}
            {typeof text !== 'string' && <Text as={text} />}
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
        <Text sx={{ fontSize: 4, cursor: 'pointer', userSelect: 'none' }} onClick={prevSlide}>
          ←
        </Text>
        <Text>
          {slideNum + 1} of {slides.length}
        </Text>
        <Text sx={{ fontSize: 4, cursor: 'pointer', userSelect: 'none' }} onClick={nextSlide}>
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
