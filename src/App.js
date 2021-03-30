import Header from './components/Header/header'
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
           <Header/>
            <AboutMe />
            <Footer />
          </Route>

          <Route exact path="/Personal">
            <Header />
            <Personal />
            <Footer />
          </Route>

          <Route exact path="/MyFriend">
         <Header/>
         
            
            <MyFriend />
          
            <Footer />
          </Route>

          <Route exact path='/wishlist'>
            <Header/>
            
            
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


        </Switch>
      </div>
    </Router>

  );
}

export default App;
