import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
