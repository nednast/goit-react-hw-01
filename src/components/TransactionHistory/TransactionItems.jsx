import css from "./TransactionHistory.module.css";

const TransactionItems = ({ item }) => {
  return (
    <tr className={css.wrapperTd}>
      <td className={css.tableTd}>{item.type}</td>
      <td className={css.tableTd}>{item.amount}</td>
      <td className={css.tableTd}>{item.currency}</td>
    </tr>
  );
};

export default TransactionItems;
