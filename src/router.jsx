/**
 * AppRouter Component
 * 
 * This component defines the routing structure for the application using React Router.
 * It includes routes for creating an employee, viewing the employee list, and handling
 * undefined routes with an error page.
 * 
 * Routes:
 * - "/" renders the CreateEmployee component.
 * - "/employee-list" renders the EmployeeList component.
 * - "*" renders the Error component for undefined routes.
 * 
 * @component
 * @returns {JSX.Element} The routing structure of the application.
 */

import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import CreateEmployee from "./Pages/create_employee";
import EmployeeList from "./Pages/employee_list";
import Error from "./Pages/error";
function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;