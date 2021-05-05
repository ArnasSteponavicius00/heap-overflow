// https://material-ui.com/styles/api/#makestyles-styles-options-hook
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#0F1618',
  },
  header: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontWeight: 600,
  },
  navBarDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  qButton: {
    justifyContent: 'center',
    alignItems: 'center',
    right: '34px',
    fontSize: '15px',
    fontWeight: 600,
    color: '#FFFFFF',
  }
}));