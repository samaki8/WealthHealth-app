//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
//import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net";
import styles from "../css/employeelist.module.css";

// Importez le script jQuery
import "../components/employee-list.js";


function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {

        // Récupérer les employés depuis le localStorage
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

        // Vérifier si des employés sont stockés dans le localStorage
        console.log("storedEmployees", storedEmployees);
        if (storedEmployees) {
            setEmployees(storedEmployees);
        }
        // Initialiser le DataTable

        $(() => {
            // fonction jQuery
        });

        return () => {
            const table = $('#employee-table').DataTable();
            if (table) {
                table.destroy();
            }
        };
    }, []);

    return (
        <div id="employee-div" className={styles.container}>
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/" className={`${styles.homeLink}`}>Home</Link>
        </div>
    );
}

export default EmployeeList;