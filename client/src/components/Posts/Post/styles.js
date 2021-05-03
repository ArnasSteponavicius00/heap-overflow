import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    borderRadius: 15,
    margin: '10px 0px 5px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#7da2a9'
  },
  header: {
    flexDirection: 'row',
    margin: '5px 20px',
    display: 'flex',
    color: '#051622',
    fontWeight: 600
  },
  messageBody: {
    margin: '-5px 20px',
    right: '20px',
    display: 'flex',
    color: '#051622',
    fontWeight: 600,
  },
  details: {
    margin: '0px 10px',
    right: '20px',
  },
  cardActions: {
    padding: '2px 5px 5px 10px',
    display: 'flex',
    justifyContent: 'row',
  },
  qButton: {
    margin: '8px 0px 2px 0px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '10px',
    borderRadius: 15,
    fontWeight: 600,
    bottom: '0px'
  },
});