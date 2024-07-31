import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

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
    trnsType: 'INCOME',
    totalIncome: 0,
    totalExpenses: 0,
  }

  onTitleChange = event => {
    this.setState({trnsTitle: event.target.value})
  }

  onAmountChange = event => {
    const amount = Number(event.target.value)
    this.setState({trnsAmount: amount})
  }

  onTypeChange = event => {
    this.setState({trnsType: event.target.value})
  }

  onIncomeChange = trnsAmount => {
    const {totalIncome} = this.state
    this.setState({
      totalIncome: totalIncome + trnsAmount,
    })
  }

  onExpenseChange = trnsAmount => {
    const {totalExpenses} = this.state
    this.setState({
      totalExpenses: totalExpenses + trnsAmount,
    })
  }

  onClickingAdd = event => {
    event.preventDefault()
    const {trnsTitle, trnsAmount, trnsType} = this.state
    const newTransaction = {
      id: uuidv4(),
      trnsTitle,
      trnsAmount,
      trnsType,
    }

    this.setState(pstate => ({
      transactionsList: [...pstate.transactionsList, newTransaction],
      totalIncome:
        trnsType === 'INCOME'
          ? this.onIncomeChange(trnsAmount)
          : pstate.totalIncome,
      totalExpenses:
        trnsType === 'EXPENSES'
          ? this.onExpenseChange(trnsAmount)
          : pstate.totalExpenses,
      trnsTitle: '',
      trnsAmount: '',
    }))
  }

  render() {
    const {
      transactionsList,
      trnsTitle,
      trnsAmount,
      trnsType,
      totalIncome,
      totalExpenses,
    } = this.state

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
            <MoneyDetails tincome={totalIncome} texpenses={totalExpenses} />
          </div>
          <div className="card3">
            <div className="trns-card-details">
              <h1>Add Transaction</h1>
              <form className="trns-card-form">
                <label htmlFor="titleInput">TITLE</label>
                <input
                  id="titleInput"
                  type="text"
                  placeholder="TITLE"
                  value={trnsTitle}
                  onChange={this.onTitleChange}
                />
                <label htmlFor="trns-amount">AMOUNT</label>
                <input
                  id="trns-amount"
                  type="number"
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
                    <option key={eachItem.optionId} value={eachItem.optionId}>
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
                    <TransactionItem
                      key={eachItem.id}
                      transactionDetails={eachItem}
                    />
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
