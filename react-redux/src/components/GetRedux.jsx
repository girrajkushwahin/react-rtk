import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from '../redux/actions/index'

const GetRedux = () => {

    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch()

    return (
        <>
            <h3>Getting & Setting Redux data</h3>
            <p>state value is - {myState}</p>
            <br />
            <button onClick={() => dispatch(incNum(5))}>addition</button> <br /> <br />
            <button onClick={() => dispatch(decNum(2))}>subtraction</button>
        </>
    )
};

export default GetRedux;
