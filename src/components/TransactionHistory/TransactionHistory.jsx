import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.row}>
          <th className={css.column}>Type</th>
          <th className={css.column}>Amount</th>
          <th className={css.column}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody>
          <tr className={css.row} key={id}>
            <td className={css.column}>{type}</td>
            <td className={css.column}>{amount}</td>
            <td className={css.column}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
