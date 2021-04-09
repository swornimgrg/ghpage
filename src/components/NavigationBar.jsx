import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Menu } from "semantic-ui-react";

export default function NavigationBar() {
  let history = useHistory();
  const isContactUsMatch = useRouteMatch("/contact-us");
  const isCatalogMatch = useRouteMatch("/catalog");

  const active = isContactUsMatch ? "contact-us" : isCatalogMatch ? "catalog" : "home";

  return (
    <Menu color="blue" pointing secondary inverted size="large">
      <Menu.Item name="Aarya Electricals" header onClick={() => history.push("/")} />
      <Menu.Menu position="right">
        <Menu.Item name="home" active={active === "home"} onClick={() => history.push("/")} />
        <Menu.Item name="catalog" active={active === "catalog"} onClick={() => history.push("/catalog")} />
        <Menu.Item name="contact us" active={active === "contact-us"} onClick={() => history.push("/contact-us")} />
      </Menu.Menu>
    </Menu>
  );
}
