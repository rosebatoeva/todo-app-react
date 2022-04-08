import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import filters from '../components/filterPanel/filterPanelSlice';

const store = configureStore({
    reducer: {
        filters,
        [apiSlice.reducerPath]: apiSlice.reducer 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;