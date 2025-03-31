//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import styles from "../css/employeelist.module.css";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // 1. Récupérer les employés depuis le localStorage
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        console.log("storedEmployees in EmployeeList", storedEmployees);
        setEmployees(storedEmployees);

        // 2. Initialiser DataTables avec les données récupérées
        const table = $("#employee-table").DataTable({
            data: storedEmployees,
            columns: [
                { title: "First Name", data: "firstName" },
                { title: "Last Name", data: "lastName" },
                { title: "Date of Birth", data: "dateOfBirth" },
                { title: "Start Date", data: "startDate" },
                { title: "Department", data: "department" },
                { title: "Street", data: "street" },
                { title: "City", data: "city" },
                { title: "State", data: "state" },
                { title: "Zip Code", data: "zipCode" },
            ],
            destroy: true, // Permet de réinitialiser proprement
        });

        // 3. Nettoyage
        return () => {
            if (table) {
                table.destroy();
            }
        };
    }, []); // ❌ Ne pas utiliser [employees] ici (créerait une boucle infinie)

    return (
        <div id="employee-div" className={styles.container}>
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/" className={`${styles.homeLink}`}>Home</Link>
        </div>
    );
}

export default EmployeeList;

