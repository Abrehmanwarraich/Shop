// src/redux/productSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';

interface ProductState {
    loading: boolean;
    error: string | null;
    success: boolean;
    // other state properties
}

const initialState: ProductState = {
    loading: false,
    error: null,
    success: false,
    // other initial state properties
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        uploadProductStart(state) {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        uploadProductSuccess(state) {
            state.loading = false;
            state.success = true;
        },
        uploadProductFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    uploadProductStart,
    uploadProductSuccess,
    uploadProductFailure,
} = productSlice.actions;

export const uploadProduct = (formData: any): AppThunk => async (dispatch) => {
    try {
        dispatch(uploadProductStart());
        // Perform the async operation here, e.g., API call
        dispatch(uploadProductSuccess());
    } catch (error) {
        dispatch(uploadProductFailure((error as Error).message));
    }
};

export default productSlice.reducer;
