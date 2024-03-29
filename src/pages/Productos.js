import React from 'react'
import { productoTarjeta } from '../data/prodTarjetas';
import Card from '../components/Card';
import '../styles/productos.css';

export default function Productos() {
  return (
    <div>
      <div className= 'contenedor-grid'>
        {productoTarjeta.map((productoTarjeta) => {return(
          <>
            <Card 
                  key={productoTarjeta.id}
                  elnombredelproducto={productoTarjeta.nombre}
                  preciodelproducto={productoTarjeta.precio}
                  descripciondelproducto={productoTarjeta.descripcion} 
                  imagendelproducto={productoTarjeta.imagen}
                
            >
            </Card>
          </>
        )} )}
      </div>
    </div>
  )
}
