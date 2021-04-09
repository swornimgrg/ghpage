import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

export default function MobileNavigationBar() {
  const [visible, setVisible] = useState(false);
  let history = useHistory();
  const isContactUsMatch = useRouteMatch("/contact-us");
  const getActive = () => {
    if (isContactUsMatch) return "contact-us";
    return "home";
  };

  return (
    <>
      <Menu color="blue" pointing secondary inverted size="large">
        <Menu.Item name="Aarya Electricals" header />
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
        <Menu.Item active={getActive() === "home"} onClick={() => history.push("/")}>
          <Icon name="home" /> Home{" "}
        </Menu.Item>
        <Menu.Item>
          <Icon name="newspaper outline" /> Catalog
        </Menu.Item>
        <Menu.Item active={getActive() === "contact-us"} onClick={() => history.push("/contact-us")}>
          <Icon name="phone" /> Contact Us{" "}
        </Menu.Item>
      </Sidebar>
    </>
  );
}
