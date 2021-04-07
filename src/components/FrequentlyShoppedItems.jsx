import React from "react";
import ProductCard from "./ProductCard";

export default function FrequentlyShoppedItems() {
  return (
    <div className="product-card-group">
      <ProductCard image="/images/bulb.png" title="LED Bulbs" />
      <ProductCard image="/images/chandelier.jpeg" title="Chandelier" />
      <ProductCard image="/images/multiplug.jpg" title="Multiplugs" />
      <ProductCard image="/images/building-wires.png" title="Wires" />
    </div>
  );
}
