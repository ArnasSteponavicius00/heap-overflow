import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '10px 0px 5px 5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#7da2a9'
      },
      header: {
        margin: '10px 20px',
        display: 'flex',
        color: '#051622',
        fontWeight: 600
      },
      qButton: {
        margin: '10px 0px 2px 35px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        borderRadius: 15,
        fontWeight: 600,
        bottom: '2px'
      }
}));