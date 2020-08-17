import { merge } from 'theme-ui';
import { base } from '@theme-ui/presets';

const teal = {
  100: '#AEDEDC',
  500: '#009289',
  700: '#006F6A'
};

const red = {
  500: '#C12A45'
};

export default merge(base, {
  borders: {
    thin: '1px solid'
  },
  buttons: {
    black: {
      transition: 'background 0.25s ease-in-out',
      color: 'background',
      bg: 'text',
      fontWeight: 'bold',
      borderRadius: 'round',
      '&:hover': {
        bg: 'black'
      }
    }
  },
  colors: {
    teal,
    red,
    primary: teal['500'],
    text: '#323232',
    muted: '#f5f5f5',
    lightGray: '#dfdfdf',
    gray: '#aaa',
    darkGray: '#606060'
  },
  fonts: {
    body: `'Roboto', ${base.fonts.body}`,
    heading: `'Rubik', ${base.fonts.body}`,
    monospace: `'Fira Code', ${base.fonts.monospace}`
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    heading: 1.35
  },
  radii: {
    round: '9999em'
  },
  styles: {
    a: {
      color: 'text',
      transition: 'color 0.25s ease-in-out',
      '&:hover': {
        color: 'primary'
      }
    },
    root: {
      bg: 'muted'
    }
  }
});
