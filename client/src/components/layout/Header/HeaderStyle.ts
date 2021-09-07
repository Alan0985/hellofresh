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
      boxShadow: '0 2px 4px rgb(36 36 36 / 15%)',
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

      '&:hover': {
        color: '#067A46',
        backgroundColor: '#E4FABF',
        fontWeight: '500',
      },
      '& active': {
        color: '#067A46',
        fontWeight: '500',
        backgroundColor: '#E4FABF',
      },
    },

    login: {
      width: '100px',
      height: '40px',
      border: '1px solid #067A46',
      borderRadius: '4px',
      marginRight: '20px',
      '&:hover': {
        backgroundColor: '#E4FABF',
      },

      '& a': {
        fontSize: '16px',
        height: '40px',
        lineHeight: '38px',
        color: '#067A46',
      },
    },
  });

export default HeaderStyle;
