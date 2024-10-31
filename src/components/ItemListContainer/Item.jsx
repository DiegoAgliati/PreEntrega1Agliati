import { Link } from "react-router-dom";
const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} className="img-item" alt={product.name} width={100} />
      <p className="text-item">{product.name}</p>
      {product.price > 0 ? (
        <p className="text-item">${product.price}</p>
      ) : (
        <span className="text-item">Gratuito</span> 
      )}
      <Link to={`/detail/` + product.id} className="details-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;