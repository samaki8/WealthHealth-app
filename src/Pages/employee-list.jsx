//WealthHealth-app\src\Pages\employee-list.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import $ from "jquery";
//import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net";

// Importez le script jQuery
import "../components/employee-list.js";

function EmployeeList() {
    useEffect(() => {
        // Déclenchez la fonction jQuery une fois que le composant est monté
        $(() => {
            // La fonction dans employee-list.js sera exécutée ici
        });

        // Nettoyage : détruisez la DataTable lors du démontage du composant
        return () => {
            const table = $('#employee-table').DataTable();
            if (table) {
                table.destroy();
            }
        };
    }, []);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/">Home</Link>
        </div>
    );
}

export default EmployeeList;
