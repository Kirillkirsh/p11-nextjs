import { useState, memo, useEffect } from "react";


const Child = memo(function ({ props1 }) {
    const
        [state1, setState1] = useState(111);
    console.debug('Child render', { props1, state1 });
    useEffect(()=>console.log(), []);
    return <>
        <fieldset>
            <legend>Child</legend>
            props = {props1}<br />
            state=<input type="number" value={state1} onInput={event => setState1(event.target.value)} />
        </fieldset>
    </>
});




export function Parent() {
    const [value, setValue] = useState('text'),
        [state2, setState2] = useState(50),
        [visible, setVisible] = useState(false);
    return <fieldset>
        <legend>Parent</legend>
        <input value={value} onInput={event => setValue(event.target.value)} /><br />
        <input type="range" value={state2} onChange={event => setState2(event.target.value)} />{state2}
        <input type="checkbox" checked={visible} onChange={() => setVisible(prev => !prev)} />
        {visible && <Child props1={state2} />}
    </fieldset>
}

