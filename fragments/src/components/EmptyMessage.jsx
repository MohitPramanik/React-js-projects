import React from 'react'

function EmptyMessage({foodItems}) {
  return (
    <>
      {foodItems.length === 0 && <h3>I am still hungry</h3>}
    </>
  )
}

export default EmptyMessage
