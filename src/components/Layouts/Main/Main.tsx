// import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navigation/Navbar";
import Cart from '../../cart';
import { getDataFromSession } from '../../../utils/localstorage';

const useStyles = makeStyles((theme: any) => ({
  appBarSpacer: { ...theme.mixins.toolbar, marginTop: '50px' },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingBottom: theme.spacing(2),
  }
}));

const MainLayout = ({ children }: any) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const address = ["/login", "/register"].includes(window.location.pathname);

  const userToken = getDataFromSession("token");
  if (!userToken) {
    navigate('/login');
  }
  return (
    <>
      {!address && <Navbar />}
      <main className={classes.content}>
        {address && <div className={classes.appBarSpacer} />}
        <div className={classes.container}>
          {children}
        </div>
      </main>

    </>
  );
};

export default MainLayout;