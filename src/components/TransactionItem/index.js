// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transList, onDeleteTrans} = props
  const {title, amount, transactionType, id} = transList
  const deleteTransDetails = () => {
    onDeleteTrans(id)
  }

  return (
    <li className="table-header-item">
      <p className="table-header-cell-item">{title}</p>
      <p className="table-header-cell-item">Rs {amount}</p>
      <p className="table-header-cell-item">{transactionType}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={deleteTransDetails}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
