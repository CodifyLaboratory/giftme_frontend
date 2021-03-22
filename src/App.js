import './App.css';
import Header from './Components/Header/header';
import AboutMe from './Pages/AboutMe/AboutMe';
import Personal from './Pages/PersonalArea/Personal';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>
          <Route exact path="/Personal">
            <Personal />
            <Footer />

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
