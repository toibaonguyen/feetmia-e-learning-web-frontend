import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItem } from '@/types/cart.type';
import { AddToCart, GetCart } from '@/services/cart.service';

export interface CartState {
  isLoading: boolean;
  data: Cart | null;
}

// Initial state
const initialState: CartState = {
  isLoading: false,
  data: null,
};

// Thunks
export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { dispatch, rejectWithValue }) => {
  try {
    const cart = await GetCart();
    return cart;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (courseId: string, { dispatch, rejectWithValue }) => {
  try {
    const cart = await AddToCart(courseId);
    return cart;
  } catch (error) {
    return rejectWithValue(error);  
  }
});

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart | null>) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
    });
  },
});

export const {
  setCart,
  setIsLoading
} = cartSlice.actions;

export default cartSlice.reducer; 