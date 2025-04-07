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
        //Ajouter un nouvel employé à la liste des employés.
        //Cette action est utilisée lorsque l'utilisateur soumet le formulaire d'ajout d'un employé.
        addEmployee: (state, action) => {
            state.employees = [...state.employees, action.payload];
        },
        //Pré-remplir un formulaire avec les données d'un employé existant.
        //Sauvegarder les modifications d'un formulaire avant soumission.
        setEmployee: (state, action) => {
            state.employee = action.payload;
        },

        clearEmployee: (state) => {
            state.employee = {};
        },
        //Synchronisation manuelle entre localStorage et Redux.
        //Cette action est utilisée pour charger tous les employés à partir de localStorage lors du démarrage de l'application.
        loadEmployees: (state, action) => {
            state.employees = action.payload;
        },
    },
});

export const { addEmployee, setEmployee, clearEmployee, loadEmployees } = employeeSlice.actions;

export const selectEmployees = (state) => state.employee.employees;
export const selectEmployee = (state) => state.employee.employee;

export default employeeSlice.reducer;
