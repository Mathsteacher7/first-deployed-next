"use client";
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
            <tr id={row.term} className={style.tableRow} key={row.term}>
              <td
                className={style.tableCell}
                dangerouslySetInnerHTML={{ __html: row.term }}
              />
              <td
                className={style.tableCell}
                dangerouslySetInnerHTML={{ __html: row.meaning }}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
