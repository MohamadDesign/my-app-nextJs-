import React from "react";
import PaginationComponent from "../Components/Table/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis as dots } from "@fortawesome/free-solid-svg-icons";
interface TableData {
  id: number;
  body: number;
  title: string;
}

const TableComponent = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tableData: TableData[] = ([] = await res.json());

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const sortedData = tableData.slice(start, end);

  return (
    <>
      <div className="card bg-base-100 border shadow-xl">
        <div className="card-body">
          <h2 className="card-title items-center justify-between">
            Domain <FontAwesomeIcon className="text-slate-400" icon={dots} />
          </h2>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Traffic</th>
                <th>Hits</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((table) => (
                <tr className="hover cursor-pointer">
                  <td>{table.title}</td>
                  <td>{(Math.random() * 100).toFixed(2)}</td>
                  <td>{(Math.random() * 1000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card-actions justify-between items-center">
            <div>
              <span className="text-slate-400 text-sm pl-4">
                {start + 1} to {end} of {tableData.length} entries
              </span>
            </div>
            <div>
              <PaginationComponent
                hasNextPage={end < tableData.length}
                hasPrevPage={start > 0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto"></div>
    </>
  );
};

export default TableComponent;
