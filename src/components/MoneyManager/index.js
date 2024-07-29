import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

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
    transactionsList: [],
    trnsTitle: '',
    trnsAmount: '',
    trnsType: 'Income',
  }

  onTitleChange = event => {
    this.setState({trnsTitle: event.target.value})
  }

  onAmountChange = event => {
    this.setState({trnsAmount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({trnsType: event.target.value})
  }

  onClickingAdd = event => {
    event.preventDefault()
    const {trnsTitle, trnsAmount, trnsType, transactionsList} = this.state
    const newTransaction = {
      trnsTitle,
      trnsAmount,
      trnsType,
    }
    this.setState(pstate => ({
      transactionsList: {...pstate.transactionsList, newTransaction},
    }))
  }

  render() {
    const {transactionsList, trnsTitle, trnsAmount, trnsType} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="card1">
            <h1 className="card1-heading">Hi, Richard</h1>
            <p className="card1-desc">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="card2">
            <MoneyDetails />
          </div>
          <div className="card3">
            <div className="trns-card-details">
              <h1>Add Transaction</h1>
              <form className="trns-card-form">
                <label htmlFor="trns-title">TITLE</label>
                <input
                  id="trns-title"
                  type="text"
                  placeholder="TITLE"
                  value={trnsTitle}
                  onChange={this.onTitleChange}
                />
                <label htmlFor="trns-amount">AMOUNT</label>
                <input
                  id="trns-amount"
                  type="text"
                  placeholder="AMOUNT"
                  value={trnsAmount}
                  onChange={this.onAmountChange}
                />
                <label htmlFor="trns-type">TYPE</label>
                <select
                  id="trns-type"
                  value={trnsType}
                  onChange={this.onTypeChange}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option
                      id={eachItem.optionId}
                      value={eachItem.displayText}
                      key={eachItem.optionId}
                    >
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" onClick={this.onClickingAdd}>
                  Add
                </button>
              </form>
            </div>
            <div className="trns-history-container">
              <h1>History</h1>
              <div className="trans-history-card">
                <div className="history-card-heading">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>action</p>
                </div>
                <ul>
                  {transactionsList.map(eachItem => (
                    <TransactionItem transactionDetails={eachItem} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
