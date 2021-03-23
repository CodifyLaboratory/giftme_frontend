import Header from './Components/Header/header'
import AboutMe from './Pages/AboutMe/AboutMe'
import Personal from './Pages/PersonalArea/Personal'
import HeaderMain from './Pages/header/header'
import './App.css'
import MainPage from './Pages/header/main/main'
import Footer from './Pages/footer/footer'
import MyFriend from './Pages/myFriends/myFriends'
import Sidebar from './Components/sidebar/sidebar'
import Wishlist from './Pages/Wishlist/wishlist'
import WishlistSidebar from './Components/wishlistSidebar/wishlistSidebar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ErrorPage from './Pages/ErrorPage/ErrorPage'



function App() {
  return (

    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/">
            <HeaderMain />
            <MainPage />
            <Footer />

          </Route>

          <Route exact path="/AboutMe">
            <Header />
            <AboutMe />
            <Footer />

          </Route>

          <Route exact path="/Personal">
            <Header />
            <Personal />
            <Footer />

          </Route>

          <Route exact path="/MyFriend">
            <Header />
            <Sidebar />
            <MyFriend />
            <Footer />
          </Route>

          <Route exact path='/wishlist'>
            <WishlistSidebar />
            <Wishlist />
            <Footer />

          </Route>

          <Route exact path='/ErrorPage'>
            <Header />
            <ErrorPage />
          </Route>


        </Switch>
      </div>
    </Router>

  );
}

export default App;
