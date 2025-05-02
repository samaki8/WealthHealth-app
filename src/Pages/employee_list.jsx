/**
 * EmployeeList Component
 * 
 * This component renders a container that displays the employee list using the `EmployeeTable` component.
 * 
 * @component
 * @returns {JSX.Element} The rendered EmployeeList component.
 * 
 * @example
 * // Usage in a React application
 * import EmployeeList from './employee_list';
 * 
 * function App() {
 *   return (
 *     <EmployeeList />
 *   );
 * }
 */
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



