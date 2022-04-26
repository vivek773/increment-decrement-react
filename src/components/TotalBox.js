import React from 'react';
import "../Style/TotalBox.css"
import { useState, useEffect } from "react"

const TotalBox = (props) => {
    console.log(props)
    const [total, setTotal] = useState(0)
    useEffect(() =>{
        setTotal(props.state1 + props.state2 + props.state3 + props.state4 )
    })
    return (
        <>
            <div className="total">
                <h1>Total :</h1>
                <input className="textBox" id="totalvalue" value={total} type="text" disabled="" />
            </div>
        </>
    );
};
export default TotalBox;


