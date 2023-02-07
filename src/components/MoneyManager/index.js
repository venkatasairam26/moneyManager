import {Component} from 'react'
import {v4 as uniqueId} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: transactionTypeOptions[0].optionId,
    transactions: [],
  }

  onMoneyType = event => {
    this.setState({title: event.target.value})
  }

  onAmountToAdd = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onGetTransType = event => {
    this.setState({transactionType: event.target.value})
  }

  onStoreTransToList = event => {
    event.preventDefault()
    const {title, amount, transactionType} = this.state
    const newTrans = {
      id: uniqueId(),
      title,
      amount,
      transactionType,
    }
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTrans],
      title: '',
      amount: '',
      transactionType: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTrans = id => {
    this.setState(prevState => ({
      transactions: prevState.transactions.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  getIncome = () => {
    const {transactions} = this.state
    let totalIncome = 0
    transactions.forEach(eachTrans => {
      if (eachTrans.transactionType === transactionTypeOptions[0].optionId) {
        totalIncome += eachTrans.amount
      }
    })
    return totalIncome
  }

  getExpanses = () => {
    const {transactions} = this.state
    let totalExpanses = 0
    transactions.forEach(eachTrans => {
      if (eachTrans.transactionType === transactionTypeOptions[1].optionId) {
        totalExpanses += eachTrans.amount
      }
    })
    return totalExpanses
  }

  render() {
    const {title, amount, transactionType, transactions} = this.state
    const totalIncome = this.getIncome()
    const totalExpanses = this.getExpanses()

    return (
      <div className="bg-container">
        <MoneyDetails inCome={totalIncome} expanses={totalExpanses} />
        <div className="transaction">
          <div>
            <h1>Add Transaction</h1>
            <form className="form-element" onSubmit={this.onStoreTransToList}>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                onChange={this.onMoneyType}
                value={title}
              />

              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                type="text"
                onChange={this.onAmountToAdd}
                value={amount}
              />

              <label htmlFor="select">TYPE</label>
              <select
                id="select"
                onChange={this.onGetTransType}
                value={transactionType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
          <ul className="transactions-table">
            <h1>History</h1>
            <li className="table-header">
              <p className="table-header-cell">Title</p>
              <p className="table-header-cell">Amount</p>
              <p className="table-header-cell">Type</p>
            </li>
            {transactions.map(each => (
              <TransactionItem
                transList={each}
                key={each.id}
                onDeleteTrans={this.onDeleteTrans}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
