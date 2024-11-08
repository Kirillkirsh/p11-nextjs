import { useState } from "react";
const mile2meters = 1482,
    kilo = 1000;
export function ConverterDemo() {
    const
        [meters, setMeters] = useState(1500);
    return <>
        <LengthInput value={meters / kilo} dimension="km" changeValue={km=> setMeters(kilo*km) } />
        <LengthInput value={meters / mile2meters} dimension="mile" changeValue={mile => setMeters(mile*mile2meters)}/>
    </>;
}

function LengthInput({ value, dimension, changeValue }) {
    return <div>
        
        <button onClick={() => changeValue(100)}>set 100</button>
        <button onClick={() => changeValue(1000)}>set 1000</button>
        {value} {dimension}
    </div>;
}