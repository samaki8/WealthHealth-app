import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employees: [],
    employee: Employee(),
};
const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        setEmployee: (state, action) => {
            state.employee = action.payload;
        },
        clearEmployee: (state) => {
            state.employee = Employee();
        },
    },
});
export const { addEmployee, setEmployee, clearEmployee } = employeeSlice.actions;
export const selectEmployees = (state) => state.employee.employees;

export default employeeSlice.reducer;