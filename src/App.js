import { createMedia } from "@artsy/fresnel";
import { Route, Switch } from "react-router-dom";
import { Sidebar } from "semantic-ui-react";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MobileNavigationBar from "./components/MobileNavigationBar";
import NavigationBar from "./components/NavigationBar";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

function App() {
  return (
    <MediaContextProvider>
      <Sidebar.Pushable>
        <Media greaterThanOrEqual="tablet">
          <NavigationBar />
        </Media>

        <Media at="mobile">
          <MobileNavigationBar />
        </Media>

        <Sidebar.Pusher>
          {/* This is the main component */}
          <Switch>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
          {/* -------------------------- */}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </MediaContextProvider>
  );
}

export default App;
