// https://material-ui.com/styles/api/#makestyles-styles-options-hook
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(5),
    borderRadius: "15px",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    borderBlockStyle: 'solid',
    borderColor: 'rgba(255, 0, 0)',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  divInfo: {
    justifyContent: 'left',
    paddingTop: '10px',
  },
  grid: {
    paddingTop: '20px',
  },
}));