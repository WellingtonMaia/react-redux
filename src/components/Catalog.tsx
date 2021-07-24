import React, { 
  useState, 
  useEffect, 
} from "react";
import api from "../services/api";
import CatalogItem from "./CatalogItem";

interface ProductImp {
  id: number;
  title: string;
  price: number;
}

function Catalog() {
  const [catalog, setCatalog] = useState<ProductImp[]>([]);
  
  const getProducts = async () => {
    try {
      const response =  await api.get('/products')
      return await response.data;  
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
   getProducts().then(products => setCatalog([...products]));
  }, [])

  return (
    <main>
      <h1>Catálogo</h1>
      <div>
        {catalog.map(product => (
          <CatalogItem
            key={product.id}
            product={product}
          />
        ))}
      </div>  
    </main>
  )
}

export default Catalog;