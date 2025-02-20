import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

interface CartState {
    item: CartItem[];
    totalAmount: number;
}

const initialState: CartItem = {price: 0};