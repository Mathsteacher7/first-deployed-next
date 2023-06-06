"use client";
import { useState } from "react";
import { data } from "../data/data";
import style from "./table.module.css";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Record<string, string>[]>(
    []
  );
  const sortedData = data.sort((firstItem, nextItem) =>
    firstItem.term.localeCompare(nextItem.term)
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    const filteredData = sortedData.filter((row) => {
      return Object.values(row).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchTerm(searchTerm);
    setFilteredData(filteredData);
  };

  const rowsToRender = filteredData.length > 0 ? filteredData : data;

  return (
    <>
      <div className={style.search}>
        <span>סנן לחיפוש מושג</span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="לדוגמא - מדד"
        />
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>מושג</th>
            <th>הסבר</th>
          </tr>
        </thead>
        <tbody>
          {rowsToRender.map((row) => {
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
    </>
  );
};

export default Table;
