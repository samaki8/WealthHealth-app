
// WealthHealth-app\src\store.jsx
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; // Ajoutez ceci
import employeeSlice from './features/employeeslice';

// 1. Combinez les reducers même s'il n'y en a qu'un
const rootReducer = combineReducers({
    employee: employeeSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['employee'],
};

// 2. Utilisez rootReducer comme base
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 3. Créez le store avec le reducer persisté
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export const persistor = persistStore(store);
export default store;


{/* Travailler sur la bibliothèque persistante Redux
Sérialisation : chaque fois que l'état de Redux change, Redux Persist intercepte l'état de votre magasin Redux et le convertit dans un format adapté au stockage comme une chaîne JSON .
État du magasin : après la sérialisation, Redux Persist enregistre ces données dans un stockage spécifié (par exemple, un stockage local).
Réhydratation : lorsque l'application se charge, Redux Persist récupère l'état persistant du stockage et le réinjecte dans le magasin Redux avant de restituer l'interface utilisateur.*/}
