import { hasConferenceStarted } from './agenda';

import apheris from '../assets/apheris-ai.png';
import arkhn from '../assets/arkhn.png';
import cdhi from '../assets/cdhi.png';
import datafleets from '../assets/data-fleets.png';
import goldenspiral from '../assets/golden-spiral.png';
import inpher from '../assets/inpher.jpg';

export const title = 'Sponsors';
export const titleLink = hasConferenceStarted ? 'Donate →' : 'Become a Sponsor →';
export const sponsorLink = hasConferenceStarted
  ? 'https://opencollective.com/openmined'
  : 'https://drive.google.com/file/d/1-9_KZ7H0q0_lOhONOFzLTGYGp2VtKqOH/view';
export const sponsors = [
  {
    image: apheris,
    name: 'Apheris AI',
    url: 'https://www.apheris.com/'
  },
  {
    image: arkhn,
    name: 'Arkhn',
    url: 'https://arkhn.com/en/'
  },
  {
    image: cdhi,
    name: 'University of California San Francisco Centre for Digital Health Innovation',
    url: 'https://www.centerfordigitalhealthinnovation.org/'
  },
  {
    image: datafleets,
    name: 'Data Fleets',
    url: 'https://www.datafleets.com/'
  },
  {
    image: goldenspiral,
    name: 'Golden Spiral',
    url: 'https://goldenspiralmarketing.com/'
  },
  {
    image: inpher,
    name: 'Inpher',
    url: 'https://www.inpher.io/'
  }
];
