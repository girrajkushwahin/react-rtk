import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from "../redux/slices/UserSlice";

const GetRedux = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.users)
    // here state variable refers to the whole store of redux in useSelector hook

    console.log(data);

    return (
        <>
            <div>Hello, Redux Tool-Kit</div>
            <br /><br />
            <button onClick={() => dispatch(addUser({ count: 10 }))}>add data</button>
        </>
    )
};

export default GetRedux;
