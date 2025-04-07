//WealthHealth-app\src\features\employeeslice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
    employee: {},
};

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees = [...state.employees, action.payload];
        },
        setEmployee: (state, action) => {
            state.employee = action.payload;
        },
        clearEmployee: (state) => {
            state.employee = {};
        },
        loadEmployees: (state, action) => {
            state.employees = action.payload;
        },
    },
});

export const { addEmployee, setEmployee, clearEmployee, loadEmployees } = employeeSlice.actions;

export const selectEmployees = (state) => state.employee.employees;
export const selectEmployee = (state) => state.employee.employee;

export default employeeSlice.reducer;
