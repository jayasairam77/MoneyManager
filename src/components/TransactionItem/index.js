// Write your code here
import './index.css'

// class TransactionItem extends Component {
//   render() {
const TransactionItem = props => {
  const {transactionDetails} = props
  const {trnsTitle, trnsAmount, trnsType} = transactionDetails
  return (
    <li className="trns-item">
      <p>{trnsTitle}</p>
      <p>{trnsAmount}</p>
      <p>{trnsType}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
//   }
// }

export default TransactionItem
