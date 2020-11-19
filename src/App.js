import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import ContactUspage from "./pages/ContactUspage";
import HomePage from "./pages/HomePage";
import OurWorkPage from "./pages/OurWorkPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/work" component={OurWorkPage} />
        <Route path="/contact" component={ContactUspage} />
        <HomePage />
      </Switch>
    </div>
  );
}

export default App;
