import { useState } from "react";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="main-image">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">
        Plataforma: {Array.isArray(product.platform) ? product.platform.join(", ") : product.platform}
        </p>
        <p>Género: {product.category}</p>
        <p>Fecha de Lanzamiento: {product.release}</p>
        <p className="text-detail">Precio: ${product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

