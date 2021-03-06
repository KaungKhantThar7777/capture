import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import ContactUspage from "./pages/ContactUspage";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import OurWorkPage from "./pages/OurWorkPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/work" component={OurWorkPage} />
          <Route path="/work/:id" component={MovieDetails} />
          <Route path="/contact" component={ContactUspage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
