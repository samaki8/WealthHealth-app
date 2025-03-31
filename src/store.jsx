//WealthHealth-app\src\store.jsx

// WealthHealth-app\src\store.jsx

import { configureStore } from '@reduxjs/toolkit';
import formSlice from './features/formSlice';

// Configure the Redux store
// The Redux store is the central hub for managing application state in a Redux application.
const store = configureStore({
    reducer: {
        // Slice
        form: formSlice,
    },
    devTools: true,
});

export default store;
