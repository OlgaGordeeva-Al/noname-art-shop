import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from './redux/actions/products';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import MainPage from './Pages/MainPage';
import ItemsPage from './Pages/ItemsPage';
import { Route, Switch } from 'react-router-dom';
import Auth from './Pages/Auth';
import Artist from './Pages/ArtistPage';
import Artists from './Pages/Artists';
import Cabinet from './Pages/Cabinet';
import Favorites from './Pages/Favorites';
import Basket from './Pages/Basket';
import OrderPage from './Pages/OrderPage';
import Payment from './Pages/Payment';
import OrderOperation from './Components/Admin/ManageOrders/OrderOperations';
import SiteOperation from './Components/Admin/ManageSite/SiteOperation';
import AddArtist from './Components/Admin/AddArtist';
import AddArt from './Components/Admin/AddArt';
import UpdateArt from './Components/Admin/UpdateArt';
import UpdateArtist from './Components/Admin/UpdateArtist';
import OrderConfirmation from './Pages/OrderConfirmation';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
      <div className="nav-fixed">
        <Navigation />
      </div>
      <div className="app">
        <Auth />
        <Switch>
          <Route path="/item/:id">
            <OrderPage />
          </Route>
          <Route path="/artist/:id">
            <Artist />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/items/:category">
            <ItemsPage />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/confirmation">
            <OrderConfirmation />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/updateArtist">
            <UpdateArtist />
          </Route>
          <Route path="/updateArt">
            <UpdateArt />
          </Route>
          <Route path="/manageOrders">
            <OrderOperation />
          </Route>
          <Route path="/manageSite">
            <SiteOperation />
          </Route>
          <Route path="/addArtist">
            <AddArtist />
          </Route>
          <Route path="/updateArtist/:id">
            <UpdateArtist />
          </Route>
          <Route path="/updateArt/:id">
            <UpdateArt />
          </Route>
          <Route path="/addArt">
            <AddArt />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </>
  );
}

export default App;
