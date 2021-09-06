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

    nav: {
      display: 'flex',
      flexDirection: 'row',
      width: '140px',
      height: '60px',
    },

    logo: {
      padding: '0 10px',
      '& img': {
        height: '30px',
        marginTop: '15px',
      },
    },

    navBar: {
      display: 'flex',
      flexDirection: 'row',
    },

    navItem: {
      padding: '0 10px',
      width: '140px',
      '& a': {
        fontSize: '14px',
        color: '#000000',
        height: '60px',
        lineHeight: '60px',
      },

      '&:hover': { color: '#067A46', backgroundColor: '#E4FABF' },
      '& active': {
        color: '#067A46',
        backgroundColor: '#E4FABF',
      },
    },
  });

export default HeaderStyle;
