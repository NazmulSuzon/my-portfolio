import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Page/Banner/Banner';
import Contact from './Page/Contact/Contact';
import Footer from './Page/Footer/Footer';
import NavigationBar from './Page/NavigationBar/NavigationBar';
import Project from './Page/Project/Project';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <NavigationBar></NavigationBar>
          <Project></Project>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
