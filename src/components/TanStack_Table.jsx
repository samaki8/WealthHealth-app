//WealthHealth-app\src\components\TabStack_Table.jsx
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { selectEmployees } from "../features/employeeslice";
import { useSelector } from "react-redux";
//import "../css/TableStyles.css";



function EmployeeTable() {
    const employees = useSelector(selectEmployees);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [columnFilters, setColumnFilters] = useState([]);
    const [sorting, setSorting] = useState([]); // <-- AJOUT

    const columns = useMemo(
        () => [
            { accessorKey: "firstName", header: "First Name", filterFn: "includesString" },
            { accessorKey: "lastName", header: "Last Name", filterFn: "includesString" },
            { accessorKey: "dateOfBirth", header: "Date of Birth", filterFn: "includesString" },
            { accessorKey: "startDate", header: "Start Date", filterFn: "includesString" },
            { accessorKey: "department", header: "Department", filterFn: "includesString" },
            { accessorKey: "street", header: "Street", filterFn: "includesString" },
            { accessorKey: "city", header: "City", filterFn: "includesString" },
            { accessorKey: "state", header: "State", filterFn: "includesString" },
            { accessorKey: "zipCode", header: "Zip Code", filterFn: "includesString" },
        ],
        []
    );

    const table = useReactTable({
        data: employees,
        columns,
        state: {
            columnFilters,
            sorting,
            pagination: {
                pageIndex: page,
                pageSize: pageSize,
            },
        },
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onPaginationChange: (updater) => {
            const newState = updater({ pageIndex: page, pageSize });
            setPage(newState.pageIndex);
            setPageSize(newState.pageSize);
        },
    });

    return (
        <div className="employee-page-bg">
            <div className="employee-container">
                <h1 className="employee-title">Current Employees</h1>
                <table className="styled-table">

                    <thead>
                        {/* Ligne des filtres */}
                        <tr>
                            {table.getHeaderGroups()[0].headers.map(header => (
                                <th key={header.id} className="filter-cell">
                                    {header.column.getCanFilter() && (
                                        <input
                                            type="text"
                                            value={header.column.getFilterValue() ?? ""}
                                            onChange={e => header.column.setFilterValue(e.target.value)}
                                            placeholder="Filtrer..."
                                            className="filter-input"
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                        {/* Ligne des titres + tri */}
                        <tr>
                            {table.getHeaderGroups()[0].headers.map(header => (
                                <th
                                    key={header.id}
                                    className="header-cell"
                                    style={{ background: "#fff", color: "#222", cursor: header.column.getCanSort() ? "pointer" : undefined }}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder ? null : header.column.columnDef.header}
                                    {/* Flèches tri toujours visibles */}
                                    <span className="sort-icons">
                                        <span className={header.column.getIsSorted() === 'asc' ? 'active' : ''}>▲</span>
                                        <span className={header.column.getIsSorted() === 'desc' ? 'active' : ''}>▼</span>
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {/* Corps du tableau */}
                    {/* Utilisation de getRowModel pour obtenir les lignes du tableau */}
                    {/* map pour itérer sur chaque ligne et chaque cellule */}
                    <tbody>
                        {/* Utilisation de getRowModel pour obtenir les lignes du tableau */}
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {/* Utilisation de getVisibleCells pour obtenir les cellules visibles de la ligne */}
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>{cell.renderValue()}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="pagination">
                    <button className="pagination-btn" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</button>
                    <button className="pagination-btn" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</button>
                </div>
                <div className="centered-home">
                    <a href="/" className="home-link">Home</a>
                </div>
            </div>
        </div>

    );


}

export default EmployeeTable;

