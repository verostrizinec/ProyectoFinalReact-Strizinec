import React, { useState } from "react";
import { productos } from "../components/products";
import '../components/Card/Card.css'
import { Button } from "@mui/material";

const Elaboraciones = () => {
  const [filterByCategory, setFilterByCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setFilterByCategory(category);
  };

  const filteredProducts = filterByCategory
    ? productos.filter((producto) => producto.categoria === filterByCategory)
    : productos;

  return (
    <div>
      <h1 className="categoria-productos">Categoria de productos</h1>
      <ul className="Categorias">
        <Button className="Categorias-name" onClick={() => handleCategoryClick("Picadas")}>Picadas</Button>
        <Button className="Categorias-name" onClick={() => handleCategoryClick("Brunchs")}>Brunchs</Button>
        <Button className="Categorias-name" onClick={() => handleCategoryClick("Panificados")}>Panificados</Button>
        <Button className="Categorias-name" onClick={() => handleCategoryClick("Pizza")}>Pizza</Button>
        <Button className="Categorias-name" onClick={() => handleCategoryClick("Catering")}>Catering</Button>
      </ul>

      <Button onClick={() => setFilterByCategory(null)}>Limpiar filtro</Button>

      <div className="Productos">
        {filteredProducts.map((producto) => (
          <div className="Productos" key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elaboraciones;
