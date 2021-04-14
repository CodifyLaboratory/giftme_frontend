import Header from './Components/Header/header'
import AboutMe from './Pages/AboutMe/AboutMe'
import Personal from './Pages/PersonalArea/Personal'
import './App.css'
import MainPage from './Pages/header/main/main'
import Footer from './Pages/footer/footer'
import MyFriend from './Pages/myFriends/myFriends'
import Wishlist from './Pages/Wishlist/wishlist'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import MyWishList from './Pages/MyWishList/MyWishList'
import Cart from './Pages/cartPage/cartPage'
import HolidayList from './Pages/yourHolidays/holidayList'
import MainHeader from './Pages/header/MainHeader'
import SignUp from './Pages/signUp/signUp'
import Login from './Pages/login/login'




function App() {
  return (

    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/">
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
            <MyFriend />
            <Footer />
          </Route>

          <Route exact path='/wishlist'>
            <Header />
            <Wishlist />
            <Footer />
          </Route>

          <Route exact path='/ErrorPage'>
            <Header />
            <ErrorPage />
          </Route>

          <Route exact path='/MyWishList'>
            <Header />
            <MyWishList />
          </Route>

          <Route exact path='/CartPage'>
            <Header />
            <Cart />
          </Route>


          <Route exact path='/holidayList'>
            
            <Header/>
            <HolidayList/>
            <Footer/>
          </Route>

          <Route exact path='/SignUp'>
            <MainHeader/>
            <SignUp/>
          </Route>

          <Route exact path='/Login'>
            <MainHeader/>
            <Login/>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
