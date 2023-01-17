import Income from "components/Income/Income";
import Expenses from "components/Expenses/Expenses";
import { useState } from "react";

const Statistics = () => {
    const [toggleStats, setToggleStats] = useState(false)

    return (<>
        <button type="button" onClick={setToggleStats(prev => !prev)}>toggle</button>
        {toggleStats? <Income />: <Expenses />}
        <button type="button" onClick={setToggleStats(prev => !prev)}>toggle</button>
    </>)
}

export default Statistics