

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

export default TableRow;