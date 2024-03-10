import TransactionItems from "./TransactionItems";
import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableWrapper}>
      <thead>
        <tr className={css.wrapperTh}>
          <th className={css.tableTh}>Type</th>
          <th className={css.tableTh}>Amount</th>
          <th className={css.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map((item) => {
          return <TransactionItems item={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
