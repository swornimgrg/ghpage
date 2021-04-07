import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import BrowseByCategory from "./BrowseByCategory";
import FrequentlyShoppedItems from "./FrequentlyShoppedItems";

export default function HomePage() {
  return (
    <>
      <Image src="images/banner.jpg" fluid />
      <Container style={{ padding: "2em 0em" }}>
        <Header as="h3">Browse by Category</Header>
        <BrowseByCategory />
        <Header as="h3">Frequently Browsed Items</Header>
        <FrequentlyShoppedItems />
      </Container>
    </>
  );
}
