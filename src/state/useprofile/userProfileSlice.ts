import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProfileEntity } from "@/components/entity/user.profile.entity";

// const initialState : UserProfileEntity = {
//     name: '',
//     phone: '',
//     email: '',
//     city: '',
//     education: '',
//     position: '',
// }

const userProfileSlice = createSlice({
    name:'userProfile',
    initialState: new UserProfileEntity(),
    reducers:{
        setUserProfile : (state, action : PayloadAction<UserProfileEntity>) => {
            state = action.payload;
            console.log(state," what do we have in state +++++++++++++++++++++++");
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.city = action.payload.city;
            state.education = action.payload.education;
            state.position = action.payload.position;
        }
    }
})

export const { setUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
