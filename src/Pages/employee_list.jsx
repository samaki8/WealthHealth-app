//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import EmployeeTable from "../components/TanStack_Table";
import "../css/TableStyles.css";

function EmployeeList() {
    return (
        <div id="employee-div" className="container">

            {/* Utiliser uniquement EmployeeTable pour afficher les données */}
            <EmployeeTable />

        </div>
    );
}

export default EmployeeList;



