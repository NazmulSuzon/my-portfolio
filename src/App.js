import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Banner from './Page/Banner/Banner';
import Blogs from './Page/Blogs/Blogs';
import Contact from './Page/Contact/Contact';
import Footer from './Page/Footer/Footer';
import NavigationBar from './Page/NavigationBar/NavigationBar';
import Project from './Page/Project/Project';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import Projects from './ProjectDetails/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <NavigationBar></NavigationBar>
          <About></About>
          <Project></Project>
          <Blogs></Blogs>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route path="/projectDetails/:detailsId">
          <Projects></Projects>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
