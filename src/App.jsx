
import shortid from 'shortid'
import './index.css'
import React, { useState } from 'react'
import productsList from './products'


const TableRow = ({ id, name, stock, price, quantity, total, inCrement, deCrement }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={() => inCrement(id)} disabled={stock === quantity}>+</button>
        <button onClick={() => deCrement(id)} disabled={quantity === 0}>-</button>
      </td>
    </tr>
  )
}

function App() {

  const [products, setProducts] = useState(productsList.map(item => ({
    ...item,
    quantity: 0,
    total: 0,
  })))


  const inCrement = (id) => {
    setProducts(products.map(item => {
      if (item.id === id && item.quantity < item.stock) {
        item.quantity++
        item.total = item.quantity * item.price
      }
      return item
    }))
  }

  const deCrement = (id) => {
    setProducts(products.map(item => {
      if (item.id === id && item.quantity > 0) {
        item.quantity--
        item.total = item.quantity * item.price
      }
      return item
    }))
  }

  return (
    <div>
      <h1>Products List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <TableRow
              key={product.id}
              {...product}
              inCrement={inCrement}
              deCrement={deCrement}
            />
          ))}
        </tbody>
      </table>
    </div>


  )
}
export default App