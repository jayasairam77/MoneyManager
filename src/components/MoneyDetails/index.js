// Write your code here
import './index.css'

// class MoneyDetails extends Component {
//   render() {
const MoneyDetails = props => {
  const {tincome, texpenses} = props

  return (
    <div className="moneyDetails-container">
      <div className="moneyDetails-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="moneyDetails-card-img"
        />
        <div className="card-balance-details">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">{tincome - texpenses}</p>
        </div>
      </div>
      <div className="moneyDetails-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="moneyDetails-card-img"
        />
        <div className="card-balance-details">
          <p>Your Income</p>
          <p data-testid="incomeAmount">{tincome}</p>
        </div>
      </div>
      <div className="moneyDetails-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="moneyDetails-card-img"
        />
        <div className="card-balance-details">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">{texpenses}</p>
        </div>
      </div>
    </div>
  )
}
//   }
// }

export default MoneyDetails
