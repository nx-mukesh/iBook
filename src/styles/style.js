import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    marginTop: 'auto',
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  category: {
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  social: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));
