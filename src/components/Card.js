import React from 'react'

export default function Card({elnombredelproducto, preciodelproducto}) {
  return (
    <button>
      <div>
        {elnombredelproducto}
      </div>
      <div>
        {preciodelproducto}
      </div>
    </button>
  )
}
