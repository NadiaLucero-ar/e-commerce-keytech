import React from 'react'
import { productoTarjeta } from '../data/prodTarjetas';
import Card from '../components/Card';

export default function Productos() {
  return (
    <div>
      <div>
        {productoTarjeta.map((productoTarjeta) => {return(
          <>
            <Card key={productoTarjeta.id}
                  elnombredelproducto={productoTarjeta.nombre}
                  preciodelproducto={productoTarjeta.precio}
            >
            </Card>
          </>
        )} )}
      </div>
    </div>
  )
}
