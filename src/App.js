import React from 'react'
import Header from './components/Header/header'
import AboutMe from './Pages/AboutMe/AboutMe'
import Personal from './Pages/PersonalArea/Personal'
import './App.css'
import MainPage from './Pages/header/main/main'
import Footer from './Pages/footer/footer'
import MyFriend from './Pages/myFriends/myFriends'
import Wishlist from './Pages/Wishlist/wishlist'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import MyWishList from './Pages/MyWishList/MyWishList'
import Cart from './Pages/cartPage/cartPage'
import HolidayList from './Pages/yourHolidays/holidayList'
import MainHeader from './Pages/header/MainHeader'
import SignUp from './Pages/signUp/signUp'
import Login from './Pages/login/login'
import {useSelector} from "react-redux";




function App() {

  const token = useSelector(state => state.auth.token);

  if (token) {

  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>

          <Route exact path="/Personal">
            <Personal />
          </Route>

          <Route exact path="/MyFriend">
            <MyFriend />
          </Route>

          <Route exact path='/wishlist'>
            <Wishlist />
          </Route>

          <Route exact path='/ErrorPage'>
            <ErrorPage />
          </Route>

          <Route exact path='/MyWishList'>
            <MyWishList />
          </Route>

          <Route exact path='/CartPage'>
            <Cart />
          </Route>


          <Route exact path='/holidayList'>
            <HolidayList/>
          </Route>

          <Route exact path='/SignUp'>
            <SignUp/>
          </Route>


          <Redirect to="/" />

        </Switch>
        <Footer />
      </div>

    </Router>

  )}

  return (
      <Router>

        <MainHeader />

      <Switch>
        <Route exact path="/">
          <MainPage />
          <Footer />
        </Route>

        <Route exact path='/SignUp'>
          <SignUp/>
        </Route>

        <Route exact path='/Login'>
          <Login/>
        </Route>

        <Redirect to="/" />
      </Switch>

      </Router>
  )
}

export default App;
