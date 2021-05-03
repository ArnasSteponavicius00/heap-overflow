import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#fffdfd'
      },
      image: {
        marginLeft: '15px',
      },
      forum: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      header: {
        margin: '10px 20px',
        display: 'flex',
        color: '#2b3b87',
        fontWeight: 600
      },
}));