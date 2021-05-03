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
    margin: '10px 0px 2px 35px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    borderRadius: 15,
    fontWeight: 600,
    bottom: '2px',
    color: '#FFFFFF',
  }
}));