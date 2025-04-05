//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';



import styles from "../css/employeelist.module.css";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);


    // Récupérer les employés depuis le localStorage
    useEffect(() => {
        try {
            const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
            setEmployees(storedEmployees);
        } catch (error) {
            console.error("Error reading employees from localStorage:", error);
        }
    }, []);


    // Configuration des colonnes pour React Table
    const columns = [
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "dateOfBirth", header: "Date of Birth" },
        { accessorKey: "startDate", header: "Start Date" },
        { accessorKey: "department", header: "Department" },
        { accessorKey: "street", header: "Street" },
        { accessorKey: "city", header: "City" },
        { accessorKey: "state", header: "State" },
        { accessorKey: "zipCode", header: "Zip Code" },
    ];


    // Utiliser `useTable` pour configurer le tableau
    const tableInstance = useReactTable({
        data: employees,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableSorting: true,
        enableColumnResizing: true,
        enableColumnFilters: true,
        enableGlobalFilter: true,
        enableRowSelection: true,
        enableRowExpansion: true,
        enablePagination: true,
        enableGrouping: true,
        enableColumnOrdering: true,
        enableColumnVisibility: true,
        enableColumnPinning: true,
        enableColumnDragging: true,
        enableColumnReordering: true,

    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        <div id="employee-div" className={styles.container}>
            <h1>Current Employees</h1>
            <table {...getTableProps()} className={styles.table}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} scope="col">{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.lenghth === 0 && (
                        <tr>
                            <td colSpan={columns.length} className={styles.noData}>
                                No employees found
                            </td>
                        </tr>
                    )}:
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to="/" className={`${styles.homeLink}`}>
                Home
            </Link>
        </div>
    );
}

export default EmployeeList;


