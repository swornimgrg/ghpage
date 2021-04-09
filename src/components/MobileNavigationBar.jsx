import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

export default function MobileNavigationBar() {
  const [visible, setVisible] = useState(false);
  let history = useHistory();

  const isContactUsMatch = useRouteMatch("/contact-us");
  const isCatalogMatch = useRouteMatch("/catalog");
  const active = isContactUsMatch ? "contact-us" : isCatalogMatch ? "catalog" : "home";

  return (
    <>
      <Menu color="blue" pointing secondary inverted size="large">
        <Menu.Item name="Aarya Electricals" header onClick={() => history.push("/")} />
        <Menu.Menu position="right">
          <Menu.Item onClick={() => setVisible(!visible)}>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        color="blue"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
        direction="right"
      >
        <Menu.Item active={active === "home"} onClick={() => history.push("/")}>
          <Icon name="home" /> Home
        </Menu.Item>
        <Menu.Item active={active === "catalog"} onClick={() => history.push("/catalog")}>
          <Icon name="newspaper outline" />
          Catalog
        </Menu.Item>
        <Menu.Item active={active === "contact-us"} onClick={() => history.push("/contact-us")}>
          <Icon name="phone" />
          Contact Us
        </Menu.Item>
      </Sidebar>
    </>
  );
}
