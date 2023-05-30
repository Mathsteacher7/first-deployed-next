import { data } from "../data/data";
import style from "./table.module.css";

const Table = () => {
  const sortedData = data.sort((firstItem, nextItem) =>
    firstItem.term.localeCompare(nextItem.term)
  );
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>מושג</th>
          <th>הסבר</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => {
          return (
            <tr className={style.tableRow} key={row.term}>
              <td className={style.tableCell}>{row.term}</td>
              <td className={style.tableCell}>{row.meaning}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
