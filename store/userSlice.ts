import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: null | {
        Id: string,
        FullName: string,
        Email: string,
        Role: "shopowner" | "employee",
        CreatedAt: Date
    }
}

const initialState: UserState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState["user"]>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem("token");
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;