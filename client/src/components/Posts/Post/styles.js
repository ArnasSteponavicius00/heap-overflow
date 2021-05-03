import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '7.5%',
    backgroundColor: '#00b7ff',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    color: 'black',
  },
  overlay2: {
    position: 'absolute',
    top: '70px',
    left: '20px',
    color: 'black',
  },
  edit: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    fontWeight: 600
  },
  details: {
    height: 0,
    paddingTop: '5.5%',
  },
  cardActions: {
    padding: '30px 10px 5px 10px',
    display: 'flex',
    justifyContent: 'row',
  },
});