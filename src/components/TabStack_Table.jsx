//WealthHealth-app\src\components\TabStack_Table.jsx
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { selectEmployees } from "../features/employeeslice";
import { useSelector } from "react-redux";

function EmployeeTable() {
    const employees = useSelector(selectEmployees);

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    // Définir les colonnes de manière stable
    const columns = useMemo(() => [
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "dateOfBirth", header: "Date of Birth" },
        { accessorKey: "startDate", header: "Start Date" },
        { accessorKey: "department", header: "Department" },
        { accessorKey: "street", header: "Street" },
        { accessorKey: "city", header: "City" },
        { accessorKey: "state", header: "State" },
        { accessorKey: "zipCode", header: "Zip Code" },
    ], []);

    // Configuration de la table
    const table = useReactTable({
        data: employees,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            pagination: {
                pageIndex: page,
                pageSize: pageSize,
            },
        },
        onPaginationChange: (updater) => {
            const newState = updater({ pageIndex: page, pageSize });
            setPage(newState.pageIndex);
            setPageSize(newState.pageSize);
        },
    });

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : header.column.columnDef.header}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>{cell.renderValue()}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </button>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default EmployeeTable;


