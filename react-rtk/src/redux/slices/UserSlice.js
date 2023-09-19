import { createSlice } from '@reduxjs/toolkit'
import { deleteUsers } from '../actions'

const UserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(action.payload);
        },
        removeUser(state, action) { },
        deleteUsers(state, action) {
            return []
        }
    },
    // extraReducers(builder) {
    //     builder.addCase(UserSlice.actions.removeUser, () => {
    //         return []
    //     })
    // },
    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return []
        })
    }
})
// console.log(UserSlice.actions)


// export { UserSlice }
export default UserSlice.reducer
// export const { addUser, removeUser, deleteUsers } = UserSlice.actions

export const { addUser, removeUser } = UserSlice.actions // not include 'deleteUser' if using deleteUser imported from actions dir
