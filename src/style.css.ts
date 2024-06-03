import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 2rem)',
  padding: '1rem',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const grid = style({
  display: 'grid',
  gridTemplateColumns: '80px 1fr',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  grid,
};
