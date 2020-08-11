import { base } from '@theme-ui/presets';
import merge from 'lodash.merge';

export default merge(base, {
  colors: {
    text: '#323232',
    muted: '#e5e5e5'
  },
  radii: {
    round: '9999em'
  },
  zIndices: {
    base: 0,
    main: 1
  },
  styles: {
    root: {
      bg: 'muted'
    }
  }
});
