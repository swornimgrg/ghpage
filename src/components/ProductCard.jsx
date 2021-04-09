import React from "react";
import { Image } from "semantic-ui-react";

export default function ProductCard({ image, title }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Image src={image} wrapped />
        <div className="card-text">{title}</div>
      </div>
    </div>
  );
}
