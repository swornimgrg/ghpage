import React from "react";
import { Image, Segment } from "semantic-ui-react";

export default function ProductCard({ image, title }) {
  return (
    <div className="product-card">
      <Segment>
        <Image src={image} wrapped />
        <div className="card-text">{title}</div>
      </Segment>
    </div>
  );
}
