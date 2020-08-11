import { merge } from 'theme-ui';
import { base } from '@theme-ui/presets';

export default merge(base, {
  borders: {
    thin: '1px solid'
  },
  colors: {
    text: '#323232',
    muted: '#f5f5f5',
    lightGray: '#dfdfdf',
    darkGray: '#606060'
  },
  radii: {
    round: '9999em'
  },
  zIndices: {
    base: 0,
    main: 1
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
