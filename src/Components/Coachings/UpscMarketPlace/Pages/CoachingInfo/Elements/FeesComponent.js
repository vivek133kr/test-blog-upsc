import * as React from "react";
import styles from "../../../../../../styles/coachings/coachingFees.module.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { useEffect } from "react";

const defaultData = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor((row) => row.lastName, {
    id: "Course Name",
    cell: (info) => {
      // Custom buttons in the "firstName" cell
      return (
        <div >
          <p className={styles["first2ndCol"]}>Text 1</p>
        </div>
      );
    },
    header: () => (
      <span
        style={{
          width: "100%",
        }}
      >
        Course Name
      </span>
    ),
    footer: (info) => info.column.id,

    
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "Duration",
    cell: (info) => <p className={styles["first2ndCol"]}>Text 1</p>,
    header: () => <span>Duration</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Fees (Offline)",
    cell: (info) => <p className={styles["first2ndCol"]}>Text 1</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span> Fees (Online) </span>,
    cell: (info) => (
      <p className={styles["first2ndCol"]}>{info.renderValue()}</p>
    ),

    footer: (info) => info.column.id,
  }),
];

function FeesComponent() {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      id="fees"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <div
        className="mt-10 mb-28"
        style={{
          width: "90%",
        }}
      >
        <p className={styles["feesHead"]}>Fees Structure</p>

       {navscreenWidth > 800 && <p className={styles["feesYear"]}>Academic Year 2023-2024</p>
       } 
       <div className="p-2" style={{ width: "100%", marginTop:navscreenWidth < 800 && "30px" }}>
          <table className={styles["feesTable"]}>
            <thead className={styles["FeesThead"]}>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{
                        textAlign: "left",

                        borderRight:
                          navscreenWidth < 800
                            ? "4px solid white"
                            : "10px solid white",

                        fontSize: navscreenWidth < 800 && "10px",
                        padding: navscreenWidth < 800 ? "10px" : "20px",
                        paddingTop: navscreenWidth < 800 ? "10px" : "20px",
                        paddingBottom: navscreenWidth < 800 ? "10px" : "20px",
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              style={{
                backgroundColor: "white",
              }}
            >
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  style={{
                    background: "var(--grey-grey-100, #E9EAF0)",
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      style={{
                        borderRight:
                          navscreenWidth < 800
                            ? "4px solid white"
                            : "10px solid white",
                      }}
                      key={cell.id}
                      className={styles["feesRow"]}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FeesComponent;
