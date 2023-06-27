import PropTypes from 'prop-types'
import css from './Transaction.module.css'

export function TransactionHistory({ items }) {
    
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr >
            <th >Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className={index % 2 === 1 ? css.gray : ''}>
              <td className={css.type}>{item.type}</td>
              <td className={css.amount}>{item.amount}</td>
              <td className={css.currency}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  TransactionHistory.propType = {
    items:PropTypes.array.isRequired
  }