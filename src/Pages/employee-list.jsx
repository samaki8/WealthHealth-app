//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEmployees, loadEmployees } from "../features/employeeslice";
import EmployeeTable from "../components/TabStack_Table";
import styles from "../css/employeelist.module.css";

function EmployeeList() {

    const employees = useSelector(selectEmployees);



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


