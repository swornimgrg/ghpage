import React from "react";
import ProductCard from "./ProductCard";

export default function BrowseByCategory() {
  return (
    <div className="product-card-group">
      <ProductCard image="/images/lighting-types.jpg" title="Lighting" />
      <ProductCard image="/images/inverter.jpg" title="Inverter" />
      <ProductCard image="/images/wire.jpg" title="Wire and Cable" />
      <ProductCard image="/images/inverter-battery.jpg" title="Batteries" />
    </div>
  );
}
