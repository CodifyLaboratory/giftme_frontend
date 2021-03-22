import Header from './pages/header/header'
import './App.css'
import MainPage from './pages/header/main/main'
import Footer from './pages/footer/footer'
import MyFriend from './pages/myFriends/myFriends'
import Sidebar from './components/sidebar/sidebar'
import Wishlist from './pages/Wishlist/wishlist'
import WishlistSidebar from './components/wishlistSidebar/wishlistSidebar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (

    <Router>
      <div className="App">
        <Header />

        <Switch>

          <Route exact path="/">
            <MainPage />
          </Route>

          <div className='container'>
            <Route exact path="/MyFriend">
              <Sidebar />
              <MyFriend />
            </Route>

          
          

          <Route exact path='/wishlist'>
            <WishlistSidebar/>
            <Wishlist />
          </Route>
          </div>


        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
