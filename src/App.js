import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import ContactUspage from "./pages/ContactUspage";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import OurWorkPage from "./pages/OurWorkPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work" component={OurWorkPage} />
        <Route path="/work/:id" component={MovieDetails} />
        <Route path="/contact" component={ContactUspage} />
      </Switch>
    </div>
  );
}

export default App;
