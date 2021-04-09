import React from "react";
import { Container, Image } from "semantic-ui-react";
import BrowseByCategory from "./BrowseByCategory";
import FrequentlyShoppedItems from "./FrequentlyShoppedItems";

export default function HomePage() {
  return (
    <>
      <Image src="images/banner.jpg" fluid />
      <Container style={{ margin: "2em 0em" }}>
        <p className="homepage-title">Browse by Category</p>
        <BrowseByCategory />
        <p className="homepage-title">Frequently Browsed Items</p>
        <FrequentlyShoppedItems />
      </Container>
    </>
  );
}
