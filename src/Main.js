import React from "react";
import TotalBox from "./components/TotalBox";
import { useState } from "react";

const Main = () => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    const [state3, setState3] = useState(0);
    const [state4, setState4] = useState(0);

    const increaseValue1 = () => {
        setState1(state1 + 1);
    }
    const decreaseValue1 = () => {
        setState1(state1 - 1);
    }
    const increaseValue2 = () => {
        setState2(state2 + 1);
    }
    const decreaseValue2 = () => {
        setState2(state2 - 1);
    }
    const increaseValue3 = () => {
        setState3(state3 + 1);
    }
    const decreaseValue3 = () => {
        setState3(state3 - 1)
    }
    const increaseValue4 = () => {
        setState4(state4 + 1)
    }
    const decreaseValue4 = () => {
        setState4(state4 - 1)
    }
    return (
        <>
            <React.Fragment>
                <div className="main">
                    <div className="first">
                        <button type="button" onClick={() => decreaseValue1()} >Decrement</button>
                        <input type="text" value={state1} className="input-field" onChange={(e) => setState1(e.target.value)} />
                        <button type="button" onClick={() => increaseValue1()}>Increment</button>
                    </div><br />
                    <div className="second">
                        <button type="button" onClick={() => decreaseValue2()} >Decrement</button>
                        <input type="text" value={state2} className="input-field" onChange={(e) => setState2(e.target.value)} />
                        <button type="button" onClick={() => increaseValue2()}>Increment</button>
                    </div><br />
                    <div className="third">
                        <button type="button" onClick={() => decreaseValue3()} >Decrement</button>
                        <input type="text" value={state3} className="input-field" onChange={(e) => setState3(e.target.value)} />
                        <button type="button" onClick={() => increaseValue3()}>Increment</button>
                    </div><br />
                    <div className="fourth">
                        <button type="button" onClick={() => decreaseValue4()} >Decrement</button>
                        <input type="text" value={state4} className="input-field" onChange={(e) => setState4(e.target.value)} />
                        <button type="button" onClick={() => increaseValue4()}>Increment</button>
                    </div><br />
                </div>
                <TotalBox state1={state1} state2={state2} state3={state3} state4={state4} />
            </React.Fragment>
        </>
    )
}
export default Main