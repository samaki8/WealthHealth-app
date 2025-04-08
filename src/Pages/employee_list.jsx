//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import EmployeeTable from "../components/TanStack_Table";
import styles from "../css/EmployeeList.module.css";

function EmployeeList() {

    return (
        <div id="employee-div" className={styles.container}>
            <h1>Current Employees</h1>

            {/* Utiliser uniquement EmployeeTable pour afficher les données */}
            <EmployeeTable />

            <Link to="/" className={`${styles.homeLink}`}>
                Home
            </Link>
        </div>
    );
}

export default EmployeeList;


