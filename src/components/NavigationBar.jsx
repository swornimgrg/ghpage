import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Menu } from "semantic-ui-react";

export default function NavigationBar() {
  let history = useHistory();
  const isContactUsMatch = useRouteMatch("/contact-us");
  const getActive = () => {
    if (isContactUsMatch) return "contact-us";
    return "home";
  };
  return (
    <Menu color="blue" pointing secondary inverted size="large">
      <Menu.Item name="Aarya Electricals" header />
      <Menu.Menu position="right">
        <Menu.Item name="home" active={getActive() === "home"} onClick={() => history.push("/")} />
        <Menu.Item name="catalog" />
        <Menu.Item
          name="contact us"
          active={getActive() === "contact-us"}
          onClick={() => history.push("/contact-us")}
        />
      </Menu.Menu>
    </Menu>
  );
}
