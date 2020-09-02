import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Flex, Box, Heading, Link, Grid, AspectImage, Text, Image as UIImage } from 'theme-ui';
import HamburgerMenu from 'react-hamburger-menu';
import useResizeObserver from 'use-resize-observer/polyfilled';

import { title, speakers } from '../content/speakers';
// import { speakerLink } from '../content/sidebar';
import theme from '../theme';
import TwitterIcon from '../assets/twitter-icon';
import LinkedInIcon from '../assets/linkedin-icon';

export const Modal = ({ speaker, onClose }) => {
  if (speaker) {
    const Social = (props) => (
      <Flex mt={3} {...props}>
        {speaker.social.map(({ type, url }) => (
          <Link
            as="a"
            href={url}
            target="_blank"
            key={url}
            sx={{ mr: 3, color: 'teal.100', '&:hover': { color: 'teal.500' } }}
          >
            {type === 'twitter' && <TwitterIcon />}
            {type === 'linkedin' && <LinkedInIcon />}
          </Link>
        ))}
      </Flex>
    );
    const Biography = (props) => (
      <Box {...props}>
        {speaker.about.map((paragraph, index) => (
          <Text mt={2} key={`${speaker.name}${index}`}>
            {paragraph}
          </Text>
        ))}
      </Box>
    );

    return createPortal(
      <>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100vw',
            height: '100vh',
            bg: 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          onClick={onClose}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            position: 'fixed',
            top: '50%',
            left: '50%',
            padding: [4, null, 5],
            bg: 'text',
            color: 'muted',
            transform: 'translate(-50%, -50%)',
            width: ['90%', '75%'],
            maxHeight: '90%',
            overflowX: 'hidden',
            overflowY: 'auto'
          }}
        >
          <Flex sx={{ flexDirection: ['column', null, 'row'], alignItems: 'center' }}>
            <Box sx={{ mt: [5, null, 0], minWidth: ['100%', null, 80, 200] }}>
              <UIImage src={speaker.image} alt={speaker.name} />
            </Box>
            <Box ml={[0, null, 4]} mt={[3, null, 0]}>
              <Heading as="h3" sx={{ fontSize: 5 }}>
                {speaker.name}
              </Heading>
              <Heading as="h5" sx={{ fontSize: 2, mt: 2, fontFamily: 'monospace' }}>
                {speaker.title}
              </Heading>
              {speaker.social.length > 0 && <Social />}
              <Biography sx={{ display: ['block', null, 'none', 'block'], mb: [3, null, 0] }} />
            </Box>
          </Flex>
          <Biography sx={{ display: ['none', null, 'block', 'none'] }} />
          <Box
            sx={{ position: 'absolute', top: 4, right: 4, cursor: 'pointer', userSelect: 'none' }}
          >
            <HamburgerMenu
              isOpen={true}
              menuClicked={onClose}
              color={theme.colors.muted}
              width={24}
              height={18}
            />
          </Box>
        </Flex>
      </>,
      document.getElementById('root')
    );
  }
  return null;
};

export default () => {
  const [gridWidth, setGridWidth] = useState(null);
  const [speakerSelected, setSpeakerSelected] = useState(null);

  return (
    <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box mb={[4, null, null, 5]}>
        <Heading as="h2" sx={{ fontSize: [6, null, null, 7] }}>
          {title}
        </Heading>
        {/* <Heading as="h3" mt={[3, null, 4]}>
          <Link as="a" href={speakerLink} target="_blank" sx={{ textDecoration: 'none' }}>
            {titleLink}
          </Link>
        </Heading> */}
      </Box>
      <Grid gap={[4, null, null, 5]} columns={[1, 2, null, 3]}>
        {speakers
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((speaker, index) => {
            const [speakerHovered, setSpeakerHovered] = useState(false);

            let ref;

            if (index === 0) {
              const props = useResizeObserver({
                onResize: ({ width }) => setGridWidth(width)
              });

              ref = props.ref;
            }

            return (
              <Box
                key={`speaker-${index}`}
                sx={{ cursor: 'pointer', userSelect: 'none' }}
                onMouseEnter={() => !speakerHovered && setSpeakerHovered(true)}
                onMouseLeave={() => speakerHovered && setSpeakerHovered(false)}
                onClick={() => setSpeakerSelected(speaker)}
              >
                <Box sx={{ position: 'relative' }}>
                  <AspectImage
                    ref={ref || null}
                    ratio={1}
                    src={speaker.image}
                    alt={speaker.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {speaker.pixelImage && (
                    <Box
                      sx={{
                        opacity: speakerHovered ? 1 : 0,
                        transition: 'opacity 0.25s ease-in-out'
                      }}
                      ref={(e) => {
                        speaker.pixelImage.style.width = `${gridWidth}px`;
                        speaker.pixelImage.style.height = `${gridWidth}px`;
                        speaker.pixelImage.style.position = 'absolute';
                        speaker.pixelImage.style.top = 0;
                        speaker.pixelImage.style.left = 0;

                        e && e.appendChild(speaker.pixelImage);
                      }}
                    />
                  )}
                </Box>
                <Heading as="h4" sx={{ fontSize: 4, mt: 2 }}>
                  {speaker.name}
                </Heading>
                <Heading as="h5" sx={{ fontFamily: 'monospace', fontSize: 2, mt: 2 }}>
                  {speaker.title}
                </Heading>
              </Box>
            );
          })}
      </Grid>
      <Modal speaker={speakerSelected} onClose={() => setSpeakerSelected(null)} />
    </Flex>
  );
};
