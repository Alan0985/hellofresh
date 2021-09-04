import { createStyles, Theme } from '@material-ui/core';

const HeaderStyle = (theme: Theme) =>
  createStyles({
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '60px',
      color: '#000000',
      backgroundColor: '#fff',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      zIndex: 3,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default HeaderStyle;
