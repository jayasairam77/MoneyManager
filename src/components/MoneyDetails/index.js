// Write your code here
import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  render() {
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
            <p>Rs 0</p>
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
            <p>Rs 0</p>
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
            <p>Rs 0</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
