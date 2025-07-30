import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user.type';
import { GetUser } from '@/services/user.service';


export interface UserState {
  isLoading: boolean;
  data: User | null;
}

// Initial state
const initialState: UserState = {
  isLoading: false,
  data: null,
};

// Thunks
export const fetchUser = createAsyncThunk('user/fetchUser', async (_, { dispatch, rejectWithValue }) => {
  try {
    const user = await GetUser();
    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
});


// Slice  
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = null;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
    });
  },
});

export const { setUser, clearUser, setIsLoading } = userSlice.actions;
export default userSlice.reducer; 