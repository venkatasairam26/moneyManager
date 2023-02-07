// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {inCome, expanses} = props

  return (
    <div>
      <div className="user-card">
        <h1>Hi,Richard</h1>
        <p>
          welcome back to your <span>Money Manager</span>
        </p>
      </div>
      <div className="money-items-cards">
        <div className="money-cards balance-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-image"
          />
          <div>
            <p className="money-type">Your Balance</p>
            <p data-testid="balanceAmount">Rs {inCome - expanses}</p>
          </div>
        </div>

        <div className="money-cards income-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-image"
          />
          <div>
            <p className="money-type">Your Income</p>
            <p data-testid="incomeAmount">Rs {inCome}</p>
          </div>
        </div>

        <div className="money-cards expenses-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-image"
          />
          <div>
            <p className="money-type">Your Expenses</p>
            <p data-testid="expensesAmount">Rs {expanses}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
