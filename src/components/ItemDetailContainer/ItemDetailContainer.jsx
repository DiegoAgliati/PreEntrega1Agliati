import { useEffect, useState } from "react"
import { getProduct } from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    useEffect(() => {
        getProduct(idProduct)
            .then((data) => setProduct(data) )
    }, [idProduct])
   
  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer

