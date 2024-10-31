import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProductInCart } = useContext(CartContext);

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
          Plataforma: {Array.isArray(product.platform)
            ? product.platform.join(", ")
            : product.platform}
        </p>
        <p>Género: {product.category}</p>
        <p>Fecha de Lanzamiento: {product.release}</p>
        <div className="text-detail">
          {product.price > 0 ? (
            <p className="text-item">${product.price}</p>
          ) : (
            <span className="text-item">Gratuito</span>
          )}
        </div>

        <button
          onClick={() => addProductInCart(product)}
          className="add-to-cart-button"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;