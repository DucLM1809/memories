import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px'
  },
  heading: {
    color: 'rgba(0,183,255, 1)'
  },
  image: {
    marginLeft: '15px'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    }
  }
}))
