import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    qButton: {
      margin: '20px 0px 0px 10px',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '15px',
      borderRadius: 15,
      fontWeight: 600,
      color: '#FFFFFF',
    },
  }));