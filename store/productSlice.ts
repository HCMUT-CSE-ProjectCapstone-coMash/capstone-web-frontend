import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
    id: string,
    name: string,
    clothType: string,
    color: string,
    imageUrl: string,
    createdAt: Date,
    importPrice: number,
    salePrice: number,
    createdBy: string,
    confirmedBy: string
}

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: []
}

const ProductSlice = createSlice({
    name: "products",
    initialState, 
    reducers: {
        addProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
        },

        addProducts(state, action: PayloadAction<Product[]>) {
            state.products.push(...action.payload);
        }
    }
});

export const { addProduct, addProducts } = ProductSlice.actions;
export default ProductSlice.reducer;