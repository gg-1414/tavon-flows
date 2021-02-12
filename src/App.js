import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import './App.scss';
import Nav from './components/Nav.js';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Work from './pages/Work/Work.js';
import Gallery from './pages/Gallery/Gallery.js';
import Contact from './pages/Contact/Contact.js';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default App;
