import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/home";
import EmployeeList from "./Pages/employee-list";
import Error from "./Pages/error";
function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;