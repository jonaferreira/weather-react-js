import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    marginTop: '20px',
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '16px',
    boxShadow: '3px 6px rgba(0, 0, 0, 0.2)',
    textShadow: '3px 6px rgba(50, 50, 70, 0.3)',
    color: '#FFF',
    fontSize: '102px',
    fontWeight: '900',
    
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
}));

export default useStyles;
